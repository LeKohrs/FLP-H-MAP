import papa from 'papaparse'
import { Validation } from 'monet'

export const parseFile = (file) => {
    return new Promise((resolve, reject) => {
        let results = []
        papa.parse(
            file, 
            {
                step: (rowResult, parser) => {
                    let filteredErrors = rowResult.errors.filter(err => err.code !== 'TooFewFields')
                    if (filteredErrors.length == 0) {
                        results.push(Validation.Success(rowResult.data))
                    } else {
                        results.push(Validation.Fail(filteredErrors))
                    }
                },
                complete: (_, __) => {
                    let errors = results
                        .filter(result => result.isFail())
                        .map(result => result.fail())
                        .flatMap(result => {
                            console.log(result)
                            return result.map(err => `Error on row ${err.row + 1}: ${err.message}`)
                        })
                    
                    if (errors.length > 0) {
                        resolve(Validation.Fail(errors))
                    } else {
                        resolve(Validation.Success(
                            results
                                .filter(result => result.isSuccess())
                                .map(result => result.success())
                                .flatMap(rowArr => rowArr)
                                .filter(row => row.length > 1)
                        ))
                    }
                }
            }
        )
    })
}