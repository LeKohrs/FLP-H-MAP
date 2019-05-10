import { Validation } from 'monet'

export const MESSAGE_TYPE_FILE = 'file'

export const IDX_FIREBASE_QUESTION_NEW_AUTO_LOANS = 0
export const IDX_FIREBASE_QUESTION_BANK_ACCOUNT = 1
export const IDX_FIREBASE_QUESTION_UPLOAD_W2 = 2
export const IDX_FIREBASE_QUESTION_NEW_MORTGAGES = 3
export const IDX_FIREBASE_QUESTION_MORTGAGE = 4
export const IDX_FIREBASE_QUESTION_FINANCIAL_GIFTS = 5
export const IDX_FIREBASE_QUESTION_NEW_STUNDENT_LOANS = 6
export const IDX_FIREBASE_QUESTION_CHILD_SUPPORT = 7
export const IDX_FIREBASE_QUESTION_CREDIT_CARD = 8
export const IDX_FIREBASE_QUESTION_ALIMONY = 9
export const IDX_FIREBASE_QUESTION_529_PLAN = 10
export const IDX_FIREBASE_QUESTION_GROSS_INCOME = 11
export const IDX_FIREBASE_QUESTION_CHILD = 12
export const IDX_FIREBASE_QUESTION_INVESTMENT_ACCOUNT = 13
export const IDX_FIREBASE_QUESTION_CLIENT = 14
export const IDX_FIREBASE_QUESTION_AUTO_LOAN = 15
export const IDX_FIREBASE_QUESTION_STUDENT_LOAN = 16
export const IDX_FIREBASE_QUESTION_RETIREMENT_ACCOUNT = 17
export const IDX_FIREBASE_QUESTION_TAXES = 18
export const IDX_FIREBASE_QUESTION_HSA_ACCOUNT = 19

export const IDX_RAW_DATA_FIRST_NAME = 0
export const IDX_RAW_DATA_LAST_NAME = 1
export const IDX_RAW_DATA_EMAIL = 2
export const IDX_RAW_DATA_PASSWORD = 3
export const IDX_RAW_DATA_USERNAME = 4
export const IDX_RAW_DATA_TOTAL_GROSS_INCOME = 5
export const IDX_RAW_DATA_TAXES_FICA = 6
export const IDX_RAW_DATA_NEW_MORTGAGES = 7
export const IDX_RAW_DATA_NEW_AUTO_LOANS = 8
export const IDX_RAW_DATA_NEW_STUDENT_LOANS = 9
export const IDX_RAW_DATA_FINANCIAL_GIFTS = 10
export const IDX_RAW_DATA_CHILD_SUPPORT = 11
export const IDX_RAW_DATA_ALIMONY = 12
export const IDX_RAW_DATA_RELATIONSHIP_NAME = 13
export const IDX_RAW_DATA_RELATIONSHIP_DOB = 14
export const IDX_RAW_DATA_RELATIONSHIP_TYPE = 15
export const IDX_RAW_DATA_ACCT_JAN1 = 16
export const IDX_RAW_DATA_ACCT_DEC31 = 17
export const IDX_RAW_DATA_ACCT_CONTRIB = 18
export const IDX_RAW_DATA_ACCT_WITHDRAWAL = 19
export const IDX_RAW_DATA_ACCT_TYPE = 20

export const RELATIONSHIP_TYPE_CHILD = 'Child'
export const RELATIONSHIP_TYPE_CLIENT = 'Client'

export const ACCT_TYPE_BANK = 'Bank'
export const ACCT_TYPE_MORTGAGE = 'Mortgage'
export const ACCT_TYPE_CREDIT_CARD = 'Credit Card'
export const ACCT_TYPE_529_PLAN = '529 Plan'
export const ACCT_TYPE_INVESTMENT = 'Investment'
export const ACCT_TYPE_AUTO_LOAN = 'Auto Loan'
export const ACCT_TYPE_STUDENT_LOAN = 'Student Loan'
export const ACCT_TYPE_RETIREMENT = 'Retirement'
export const ACCT_TYPE_HSA = 'HSA'


export const validationToTransferrable = validation => {
    if (validation.isSuccess()) {
        return {
            success: true,
            value: validation.success()
        }
    } else {
        return {
            success: false,
            value: validation.fail()
        }
    }
}

export const transferrableToValidation = transferrable => {
    if (transferrable.success) {
        return Validation.Success(transferrable.value)
    } else {
        return Validation.Fail(transferrable.value)
    }
}