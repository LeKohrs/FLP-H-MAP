import registerPromiseWorker from 'promise-worker/register'
import getExtension from 'file-extension'
import { Validation } from 'monet'
import { 
    MESSAGE_TYPE_FILE, 
    validationToTransferrable,
    IDX_RAW_DATA_FIRST_NAME,
    IDX_RAW_DATA_LAST_NAME,
    IDX_RAW_DATA_EMAIL,
    IDX_RAW_DATA_PASSWORD,
    IDX_RAW_DATA_USERNAME,
    IDX_RAW_DATA_TOTAL_GROSS_INCOME,
    IDX_RAW_DATA_TAXES_FICA,
    IDX_RAW_DATA_NEW_MORTGAGES,
    IDX_RAW_DATA_NEW_AUTO_LOANS,
    IDX_RAW_DATA_NEW_STUDENT_LOANS,
    IDX_RAW_DATA_FINANCIAL_GIFTS,
    IDX_RAW_DATA_CHILD_SUPPORT,
    IDX_RAW_DATA_ALIMONY,
    IDX_RAW_DATA_RELATIONSHIP_NAME,
    IDX_RAW_DATA_RELATIONSHIP_DOB,
    IDX_RAW_DATA_RELATIONSHIP_TYPE,
    IDX_RAW_DATA_ACCT_JAN1,
    IDX_RAW_DATA_ACCT_DEC31,
    IDX_RAW_DATA_ACCT_CONTRIB,
    IDX_RAW_DATA_ACCT_WITHDRAWAL,
    IDX_RAW_DATA_ACCT_TYPE,
    RELATIONSHIP_TYPE_CHILD,
    RELATIONSHIP_TYPE_CLIENT,
    ACCT_TYPE_BANK,
    ACCT_TYPE_MORTGAGE,
    ACCT_TYPE_CREDIT_CARD,
    ACCT_TYPE_529_PLAN,
    ACCT_TYPE_INVESTMENT,
    ACCT_TYPE_AUTO_LOAN,
    ACCT_TYPE_STUDENT_LOAN,
    ACCT_TYPE_RETIREMENT,
    ACCT_TYPE_HSA,
    IDX_FIREBASE_QUESTION_CLIENT,
    IDX_FIREBASE_QUESTION_CHILD,
    IDX_FIREBASE_QUESTION_BANK_ACCOUNT,
    IDX_FIREBASE_QUESTION_MORTGAGE,
    IDX_FIREBASE_QUESTION_CREDIT_CARD,
    IDX_FIREBASE_QUESTION_529_PLAN,
    IDX_FIREBASE_QUESTION_INVESTMENT_ACCOUNT,
    IDX_FIREBASE_QUESTION_AUTO_LOAN,
    IDX_FIREBASE_QUESTION_STUDENT_LOAN,
    IDX_FIREBASE_QUESTION_RETIREMENT_ACCOUNT,
    IDX_FIREBASE_QUESTION_HSA_ACCOUNT,
    IDX_FIREBASE_QUESTION_FINANCIAL_GIFTS,
    IDX_FIREBASE_QUESTION_CHILD_SUPPORT,
    IDX_FIREBASE_QUESTION_ALIMONY,
    IDX_FIREBASE_QUESTION_GROSS_INCOME,
    IDX_FIREBASE_QUESTION_TAXES,
    IDX_FIREBASE_QUESTION_NEW_AUTO_LOANS,
    IDX_FIREBASE_QUESTION_NEW_STUNDENT_LOANS,
    IDX_FIREBASE_QUESTION_NEW_MORTGAGES
} from './importConstants'
import { parseFile as parseCsv } from './parser/csv'
import db from '@/firebase/init'
import slugify from 'slugify'
import firebase from 'firebase'

const FILE_TYPE_CSV = 'csv'
const FILE_TYPE_XLSX = 'xlsx'

const validFileExtensions = [
    FILE_TYPE_CSV
    //TODO: xlsx support
]

const getInvalidFileExtensionMessage = (fileExt) => `
    Invalid File Extension: ${fileExt}.  
    Please upload a file with one of the following extensions: ${JSON.stringify(validFileExtensions)}
`

const detectFile = file => {
    let fileExt = getExtension(file.name)
    if (validFileExtensions.includes(fileExt)) {
        return Validation.Success(fileExt)
    } else {
        return Validation.Fail(getInvalidFileExtensionMessage(fileExt))
    }
}

const isHeaderRow = row => row.length > 0
    && row[0] === 'First Name'
    && row[1] === 'Last Name'
    && row[2] === 'Email'

const getRelationships = row => {
    let relType = row[IDX_RAW_DATA_RELATIONSHIP_TYPE].trim()
    let relName = row[IDX_RAW_DATA_RELATIONSHIP_NAME].trim()
    let relDoB = row[IDX_RAW_DATA_RELATIONSHIP_DOB].trim()

    if (relType !== '' && relName !== '' && relDoB !== '') {
        return [{
            relationshipType: relType,
            name: relName,
            dob: relDoB
        }]
    } else {
        return []
    }
}

const getAccounts = row => {
    let acctType = row[IDX_RAW_DATA_ACCT_TYPE].trim()
    let acctJan1 = row[IDX_RAW_DATA_ACCT_JAN1].trim()
    let acctDec31 = row[IDX_RAW_DATA_ACCT_DEC31].trim()
    let acctContrib = row[IDX_RAW_DATA_ACCT_CONTRIB].trim()
    let acctWithdraw = row[IDX_RAW_DATA_ACCT_WITHDRAWAL].trim()

    if (acctType !== '' && acctJan1 !== '' && acctDec31 !== '') {
        return [{
            accountType: acctType,
            jan1Bal: acctJan1,
            dec31Bal: acctDec31,
            contrib: acctContrib,
            withdrawals: acctWithdraw
        }]
    } else {
        return []
    }
}

const getSplitRelationships = (row, acc) => {
    let relationships = getRelationships(row)
    let getRelationshipsOfType = relType =>
        relationships.filter(rel => rel.relationshipType === relType)
    return {
        children: acc.children.concat(
            getRelationshipsOfType(RELATIONSHIP_TYPE_CHILD)
        ),
        clients: acc.clients.concat(
            getRelationshipsOfType(RELATIONSHIP_TYPE_CLIENT)
        )
    }
}

const getSplitAccounts = (row, acc) => {
    let accounts = getAccounts(row)
    let getAccountsOfType = acctType =>
        accounts.filter(acct => acct.accountType === acctType)
    return {
        bankAccounts: acc.bankAccounts.concat(
            getAccountsOfType(ACCT_TYPE_BANK)
        ),
        mortgages: acc.mortgages.concat(
            getAccountsOfType(ACCT_TYPE_MORTGAGE)
        ),
        creditCards: acc.creditCards.concat(
            getAccountsOfType(ACCT_TYPE_CREDIT_CARD)
        ),
        plan529s: acc.plan529s.concat(
            getAccountsOfType(ACCT_TYPE_529_PLAN)
        ),
        investmentAccounts: acc.investmentAccounts.concat(
            getAccountsOfType(ACCT_TYPE_INVESTMENT)
        ),
        autoLoans: acc.autoLoans.concat(
            getAccountsOfType(ACCT_TYPE_AUTO_LOAN)
        ),
        studentLoans: acc.studentLoans.concat(
            getAccountsOfType(ACCT_TYPE_STUDENT_LOAN)
        ),
        retirementAccounts: acc.retirementAccounts.concat(
            getAccountsOfType(ACCT_TYPE_RETIREMENT)
        ),
        healthSavingsAccounts: acc.healthSavingsAccounts.concat(
            getAccountsOfType(ACCT_TYPE_HSA)
        )
    }
}

const processUserData = userData => userData.reduce(
    (accVal, row, idx) => accVal.flatMap(acc => {
        if (idx == 0) {
            acc.firstName = row[IDX_RAW_DATA_FIRST_NAME].trim()
            acc.lastName = row[IDX_RAW_DATA_LAST_NAME].trim()
            acc.email = row[IDX_RAW_DATA_EMAIL].trim()
            acc.password = row[IDX_RAW_DATA_PASSWORD].trim()
            acc.username = row[IDX_RAW_DATA_USERNAME].trim()
            acc.totalGrossIncome = row[IDX_RAW_DATA_TOTAL_GROSS_INCOME].trim()
            acc.taxesFica = row[IDX_RAW_DATA_TAXES_FICA].trim()
            acc.newMortgages = row[IDX_RAW_DATA_NEW_MORTGAGES].trim()
            acc.newAutoLoans = row[IDX_RAW_DATA_NEW_AUTO_LOANS].trim()
            acc.newStudentLoans = row[IDX_RAW_DATA_NEW_STUDENT_LOANS].trim()
            acc.fincancialGifts = row[IDX_RAW_DATA_FINANCIAL_GIFTS].trim()
            acc.childSupport = row[IDX_RAW_DATA_CHILD_SUPPORT].trim()
            acc.alimony = row[IDX_RAW_DATA_ALIMONY].trim()
        }
        let rels = getSplitRelationships(row, acc)
        acc.children = rels.children
        acc.clients = rels.clients

        let accts = getSplitAccounts(row, acc)
        acc.bankAccounts = accts.bankAccounts
        acc.mortgages = accts.mortgages
        acc.creditCards = accts.creditCards
        acc.plan529s = accts.plan529s
        acc.investmentAccounts = accts.investmentAccounts
        acc.autoLoans = accts.autoLoans
        acc.studentLoans = accts.studentLoans
        acc.retirementAccounts = accts.retirementAccounts
        acc.healthSavingsAccounts = accts.healthSavingsAccounts
        return Validation.Success(acc)
    }), 
    Validation.Success({
        children: [],
        clients: [],
        bankAccounts: [],
        mortgages: [],
        creditCards: [],
        plan529s: [],
        investmentAccounts: [],
        autoLoans: [],
        studentLoans: [],
        retirementAccounts: [],
        healthSavingsAccounts: []
    })
)

const processRawData = rawData => {
    if (rawData.length > 0) {
        let hasHeader = isHeaderRow(rawData[0])
        return (hasHeader ? rawData.slice(1) : rawData)
            .map(row => Validation.Success(row)) //TODO: Validate the row
            .reduce(
                (accVal, rowVal, idx) => accVal.flatMap(acc => rowVal.flatMap(row => {
                    let firstCell = row[0]
                    if (firstCell === '~') {
                        if (acc.currentUsername != null && typeof acc.currentUsername !== 'undefined') {
                            acc[acc.currentUsername] = acc[acc.currentUsername].concat([row])
                            return Validation.Success(acc)
                        } else {
                            return Validation.Fail(
                                `Error.  Row: ${idx + 1 + (hasHeader ? 1 : 0)} starts with '~' but there is no preceeding data`
                            )
                        }
                    } else {
                        let username = row[IDX_RAW_DATA_USERNAME]
                        if (typeof username === 'undefined' || username == null || username == '') {
                            return Validation.Fail(
                                `Error.  Row: ${idx + 1 + (hasHeader ? 1 : 0)} has no username defined in column ${IDX_RAW_DATA_USERNAME + 1}.`
                            )
                        }
                        acc.currentUsername = username
                        acc.usernames = acc.usernames.concat([username])
                        acc[username] = [row]
                        return Validation.Success(acc)
                    }
                })),
                Validation.Success({ usernames: [] })
            )
            .flatMap(resultObj => {
                return resultObj.usernames.reduce(
                    (accVal, username) => accVal.flatMap(acc => {
                        let userData = resultObj[username]
                        return processUserData(userData).map(processedUserData => {
                            acc[username] = processedUserData
                            acc.usernames = acc.usernames.concat([username])
                            return acc
                        })
                    }),
                    Validation.Success({ usernames: [] })
                )
            })
    } else {
        return Validation.Success([])
    }
}

const mapRelationships = relationships => relationships.map(relationship => { return {
    name: relationship.name,
    dateOfBirth: relationship.dob
}})

const mapPartialAccounts = partialAccounts => partialAccounts.map(partialAccount => { return {
    startBalance: partialAccount.jan1Bal,
    endBalance: partialAccount.dec31Bal
}})

const mapFullAccounts = fullAccounts => fullAccounts.map(fullAccount => { return {
    startBalance: fullAccount.jan1Bal,
    contributions: fullAccount.contrib,
    withdrawals: fullAccount.withdrawals,
    endBalance: fullAccount.dec31Bal
}})

const importProcessedData = processedData => {
    return processedData.usernames.reduce((p, username) => {
        return p.then((results) => {
            let userData = processedData[username]
            let slug = slugify(username, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@]/g,
                lower: true
            })
            return db.collection('users').doc(slug).get().then(doc => {
                if (doc.exists) {
                    return results.concat(Validation.Fail(
                        `User already exists with username ${username}.  Skipping importing data from file for user ${username}.`
                    ))
                }

                return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
                    .then(cred => {
                        return db.collection('users').doc(slug).set({
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            username: username,
                            user_id: cred.user.uid,
                            slug: slug,
                            role: 'user'
                        })
                    }).then(
                        () => db.collection('users').where('slug', '==', slug).get()
                    ).then(
                        userSnap => userSnap.docs[0].id
                    ).then(
                        (userId) => db.collection('questions').get()
                            .then(questions => { return { questions: questions.docs, userId: userId } })
                    ).then(tup => { return {
                        questions: tup.questions.map((doc, idx) => {
                            let question = doc.data()
                            question.id = doc.id
                            question.checked = false
                            question.show = false
                            switch(idx) {
                                case IDX_FIREBASE_QUESTION_CLIENT:
                                    question.questions = mapRelationships(userData.clients)
                                    break
                                case IDX_FIREBASE_QUESTION_CHILD:
                                    question.questions = mapRelationships(userData.children)
                                    break
                                case IDX_FIREBASE_QUESTION_BANK_ACCOUNT:
                                    question.questions = mapPartialAccounts(userData.bankAccounts)
                                    break
                                case IDX_FIREBASE_QUESTION_MORTGAGE:
                                    question.questions = mapPartialAccounts(userData.mortgages)
                                    break
                                case IDX_FIREBASE_QUESTION_CREDIT_CARD:
                                    question.questions = mapPartialAccounts(userData.creditCards)
                                    break
                                case IDX_FIREBASE_QUESTION_529_PLAN:
                                    question.questions = mapFullAccounts(userData.plan529s)
                                    break
                                case IDX_FIREBASE_QUESTION_INVESTMENT_ACCOUNT:
                                    question.questions = mapFullAccounts(userData.investmentAccounts)
                                    break
                                case IDX_FIREBASE_QUESTION_AUTO_LOAN:
                                    question.questions = mapPartialAccounts(userData.autoLoans)
                                    break
                                case IDX_FIREBASE_QUESTION_STUDENT_LOAN:
                                    question.questions = mapPartialAccounts(userData.studentLoans)
                                    break
                                case IDX_FIREBASE_QUESTION_RETIREMENT_ACCOUNT:
                                    question.questions = mapFullAccounts(userData.retirementAccounts)
                                    break
                                case IDX_FIREBASE_QUESTION_HSA_ACCOUNT:
                                    question.questions = mapFullAccounts(userData.healthSavingsAccounts)
                                    break
                                case IDX_FIREBASE_QUESTION_FINANCIAL_GIFTS:
                                    question.answer = userData.fincancialGifts
                                    break
                                case IDX_FIREBASE_QUESTION_CHILD_SUPPORT:
                                    question.answer = userData.childSupport
                                    break
                                case IDX_FIREBASE_QUESTION_ALIMONY:
                                    question.answer = userData.alimony
                                    break
                                case IDX_FIREBASE_QUESTION_GROSS_INCOME:
                                    question.answer = userData.totalGrossIncome
                                    break
                                case IDX_FIREBASE_QUESTION_TAXES:
                                    question.answer = userData.taxesFica
                                    break
                                case IDX_FIREBASE_QUESTION_NEW_AUTO_LOANS:
                                    question.answer = userData.newAutoLoans
                                    break
                                case IDX_FIREBASE_QUESTION_NEW_STUNDENT_LOANS:
                                    question.answer = userData.newStudentLoans
                                    break
                                case IDX_FIREBASE_QUESTION_NEW_MORTGAGES:
                                    question.answer = userData.newMortgages
                                    break
                            }
                            return question
                        }), 
                        userId: tup.userId 
                    }}).then(tup => db.collection('users').doc(tup.userId).update({
                        questions: tup.questions
                    })).then(() => 
                        results.concat([Validation.Success(userData)])
                    ).catch(err => results.concat([Validation.Fail(err.message)]))
            })
        })
    }, Promise.resolve([]))
}

registerPromiseWorker(message => {
    if (message.type === MESSAGE_TYPE_FILE) {
        let file = message.file
        
        return detectFile(file)
            .map(fileExt => {
                switch(fileExt) {
                    case FILE_TYPE_CSV:
                        return parseCsv(file)
                    //TODO: xlsx support
                    default:
                        return Promise.resolve(Validation.Fail([getInvalidFileExtensionMessage(fileExt)]))
                }
            })
            .map(p => p
                .then(vali => vali.flatMap(rawData => processRawData(rawData)))
                .then(vali => 
                    vali.map(processedData => {
                        return importProcessedData(processedData)
                    }).cata(
                        failure => Promise.resolve([Validation.Fail(failure)]), 
                        success => success
                    )
                )
            )
            .failMap(errors => Promise.resolve(Validation.Fail(errors)))
            .cata(failure => failure.then(ff => [ff]), success => success)
            .then(validations => validations.map(validation => validationToTransferrable(validation)))
    }
})