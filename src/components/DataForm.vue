<template>
  <div class="form-data">
    <h2>Information for <span>{{ selectedUser.firstName }} {{ selectedUser.lastName }}</span></h2>
    <div class="admin__selected-user__answers">
      <form @submit.prevent="editQuestions" class="edit-questions__form">
        <div class="field field--client">
          <h3>{{ selectedUser.questions[10].title }}</h3>
          <div class="questions client-questions">
            <ul>
              <li v-for="(client, key) in clients" :key="key">
                <div v-if="clients[key].name" class="sub-field">
                  <label for="client-name">Name:</label>
                  <input type="text" name="client-name" v-model="clients[key].name">
                </div>
                <div v-if="clients[key].dateOfBirth" class="sub-field">
                  <label for="client-birthday">Date of Birth:</label>
                  <input  type="text" name="client-birthday" v-model="clients[key].dateOfBirth">
                </div>
              </li>
            </ul>
            <label for="client-name">Name:</label>
            <input type="text" name="client-name" v-model="anotherClient.name">
            <label for="client-birthday">Date of Birth:</label>
            <input type="text" name="client-birthday" v-model="anotherClient.dateOfBirth">
            <p v-if="clientMsg">{{ clientMsg }}</p>
            <a @click.prevent="addClient">Add Client</a>  
          </div>
        </div>
        <div class="field field--client">
          <h3>{{ selectedUser.questions[8].title }}</h3>
          <div class="questions client-questions">
            <ul>
              <li v-for="(child, key) in children" :key="key">
                <div v-if="children[key].name" class="sub-field"> 
                  <label for="child-name">Name:</label>
                  <input type="text" name="child-name" v-model="children[key].name">
                </div>
                <div v-if="children[key].dateOfBirth" class="sub-field">
                  <label for="child-birthday">Date of Birth:</label>
                  <input type="text" name="child-birthday" v-model="children[key].dateOfBirth">
                </div>
              </li>
            </ul>
            <label for="child-name">Name:</label>
            <input type="text" name="child-name" v-model="anotherChild.name">
            <label for="child-birthday">Date of Birth:</label>
            <input type="text" name="child-birthday" v-model="anotherChild.dateOfBirth">
            <p v-if="childMsg">{{ childMsg }}</p>
            <button @click.prevent="addChild">Add Child</button>  
          </div>
        </div>
        <div class="field field--bank-account">
          <h3>{{ selectedUser.questions[0].title }}</h3>
          <div class="questions bank-account-questions">
            <ul>
              <li v-for="(account, key) in bankAccounts" :key="key">
                <div v-if="bankAccounts[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input  type="text" name="start-balance" v-model="bankAccounts[key].startBalance">
                </div>
                <div v-if="bankAccounts[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="bankAccounts[key].endBalance">
                </div>
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="anotherBankAccount.startBalance">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="anotherBankAccount.endBalance">
            <p v-if="bankAccountMsg">{{ bankAccountMsg }}</p>
            <button @click.prevent="addBankAccount">Add Bank Account</button>  
          </div>
        </div>
        <div class="field field--mortgage">
          <h3>{{ selectedUser.questions[2].title }}</h3>
          <div class="questions mortgage-questions">
            <ul>
              <li v-for="(mortgage, key) in mortgages" :key="key">
                <div v-if="mortgages[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input  type="text" name="start-balance" v-model="mortgages[key].startBalance">
                </div>
                <div v-if="mortgages[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input  type="text" name="end-balance" v-model="mortgages[key].endBalance">
                </div>
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="anotherMortgage.startBalance">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="anotherMortgage.endBalance">
            <p v-if="mortgageMsg">{{ mortageMsg }}</p>
            <button @click.prevent="addMortgage">Add Mortgage</button>  
          </div>
        </div>
        <div class="field field--credit-card">
          <h3>{{ selectedUser.questions[5].title }}</h3>
          <div class="questions credit-card-questions">
            <ul>
              <li v-for="(creditCard, key) in creditCards" :key="key">
                <div v-if="creditCards[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="creditCards[key].startBalance">
                </div>
                <div v-if="creditCards[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="creditCards[key].endBalance">
                </div>
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="anotherCreditCard.startBalance">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="anotherCreditCard.endBalance">
            <p v-if="creditCardMsg">{{ creditCardMsg }}</p>
            <button @click.prevent="addCreditCard">Add Credit Card</button>  
          </div>
        </div>
        <div class="field field--529-plan-account">
          <h3>{{ selectedUser.questions[7].title }}</h3>
          <div class="questions plan-529-account-questions">
            <ul>
              <li v-for="(account, key) in plan529Accounts" :key="key">
                <div v-if="plan529Accounts[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="plan529Accounts[key].startBalance">
                </div>
                <div v-if="plan529Accounts[key].contributions" class="sub-field">
                  <label for="contributions">Contributions during current year:</label>
                  <input type="text" name="contributions" v-model="plan529Accounts[key].contributions">
                </div>
                <div  v-if="plan529Accounts[key].withdrawals" class="sub-field">
                  <label for="withdrawals">Withdrawals during current year:</label>
                  <input type="text" name="withdrawals" v-model="plan529Accounts[key].withdrawals">
                </div>
                <div v-if="plan529Accounts[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="plan529Accounts[key].endBalance">
                </div>
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="another529Plan.startBalance">
            <label for="contributions">Contributions during current year:</label>
            <input type="text" name="contributions" v-model="another529Plan.contributions">
            <label for="withdrawals">Withdrawals during current year:</label>
            <input type="text" name="withdrawals" v-model="another529Plan.withdrawals">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="another529Plan.endBalance">
            <p v-if="plan529AccountMsg">{{ plan529AccountMsg }}</p>
            <button @click.prevent="add529Account">Add 529 Plan Account</button>  
          </div>
        </div>
        <div class="field field--investment-account">
          <h3>{{ selectedUser.questions[9].title }}</h3>
          <div class="questions investment-account-questions">
            <ul>
              <li v-for="(account, key) in investmentAccounts" :key="key">
                <div v-if="investmentAccounts[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="investmentAccounts[key].startBalance">
                </div> 
                <div v-if="investmentAccounts[key].contributions" class="sub-field">
                  <label for="contributions">Contributions during current year:</label>
                  <input type="text" name="contributions" v-model="investmentAccounts[key].contributions">
                </div> 
                <div v-if="investmentAccounts[key].withdrawals" class="sub-field">
                  <label for="withdrawals">Withdrawals during current year:</label>
                  <input type="text" name="withdrawals" v-model="investmentAccounts[key].withdrawals">
                </div> 
                <div v-if="investmentAccounts[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="investmentAccounts[key].endBalance">
                </div> 
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="anotherInvestmentAccount.startBalance">
            <label for="contributions">Contributions during current year:</label>
            <input type="text" name="contributions" v-model="anotherInvestmentAccount.contributions">
            <label for="withdrawals">Withdrawals during current year:</label>
            <input type="text" name="withdrawals" v-model="anotherInvestmentAccount.withdrawals">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="anotherInvestmentAccount.endBalance">
            <p v-if="investmentAccountMsg">{{ investmentAccountMsg }}</p>
            <button @click.prevent="addInvestmentAccount">Add Investment Account</button>  
          </div>
        </div>
        <div class="field field--auto-loan">
          <h3>{{ selectedUser.questions[11].title }}</h3>
          <div class="questions auto-loan-questions">
            <ul>
              <li v-for="(autoLoan, key) in autoLoans" :key="key">
                <div v-if="autoLoans[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="autoLoans[key].startBalance">
                </div>
                <div v-if="autoLoans[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="autoLoans[key].endBalance">
                </div>
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="anotherAutoLoan.startBalance">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="anotherAutoLoan.endBalance">
            <p v-if="autoLoanMsg">{{ autoLoanMsg }}</p>
            <button @click.prevent="addAutoLoan">Add Auto Loan</button>  
          </div>
        </div>
          <div class="field field--student-loan">
          <h3>{{ selectedUser.questions[12].title }}</h3>
          <div class="questions student-loan-questions">
            <ul>
              <li v-for="(studentLoan, key) in studentLoans" :key="key">
                <div v-if="studentLoans[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="studentLoans[key].startBalance">
                </div>
                <div v-if="studentLoans[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="studentLoans[key].endBalance">
                </div>
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="anotherStudentLoan.startBalance">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="anotherStudentLoan.endBalance">
            <p v-if="studentLoanMsg">{{ studentLoanMsg }}</p>
            <button @click.prevent="addStudentLoan">Add Student Loan</button>  
          </div>
        </div>
        <div class="field field--retirement-account">
          <h3>{{ selectedUser.questions[13].title }}</h3>
          <div class="questions retirement-account-questions">
            <ul>
              <li v-for="(account, key) in retirementAccounts" :key="key">
                <div v-if="retirementAccounts[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="retirementAccounts[key].startBalance">
                </div>
                <div v-if="retirementAccounts[key].contributions" class="sub-field">
                  <label for="contributions">Contributions during current year:</label>
                  <input type="text" name="contributions" v-model="retirementAccounts[key].contributions">
                </div>
                <div v-if="retirementAccounts[key].withdrawals" class="sub-field">
                  <label for="withdrawals">Withdrawals during current year:</label>
                  <input type="text" name="withdrawals" v-model="retirementAccounts[key].withdrawals">
                </div>
                <div v-if="retirementAccounts[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="retirementAccounts[key].endBalance">
                </div>
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="anotherRetirementAccount.startBalance">
            <label for="contributions">Contributions during current year:</label>
            <input type="text" name="contributions" v-model="anotherRetirementAccount.contributions">
            <label for="withdrawals">Withdrawals during current year:</label>
            <input type="text" name="withdrawals" v-model="anotherRetirementAccount.withdrawals">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="anotherRetirementAccount.endBalance">
            <p v-if="retirementAccountMsg">{{ retirementAccountMsg }}</p>
            <button @click.prevent="addRetirementAccount">Add Retirement Account</button>  
          </div>
        </div>
        <div class="field field--hsa-account">
          <h3>{{ selectedUser.questions[14].title }}</h3>
          <div class="questions hsa-account-questions">
            <ul>
              <li v-for="(account, key) in hsaAccounts" :key="key">
                <div v-if="hsaAccounts[key].startBalance" class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="hsaAccounts[key].startBalance">
                </div>
                <div v-if="hsaAccounts[key].contributions" class="sub-field">
                  <label for="contributions">Contributions during current year:</label>
                  <input type="text" name="contributions" v-model="hsaAccounts[key].contributions">
                </div>
                <div v-if="hsaAccounts[key].withdrawals" class="sub-field">
                  <label for="withdrawals">Withdrawals during current year:</label>
                  <input type="text" name="withdrawals" v-model="hsaAccounts[key].withdrawals">
                </div>
                <div v-if="hsaAccounts[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="hsaAccounts[key].endBalance">
                </div>
              </li>
            </ul>
            <label for="start-balance">Balance on January 1, 2018:</label>
            <input type="text" name="start-balance" v-model="anotherHSAAccount.startBalance">
            <label for="contributions">Contributions during current year:</label>
            <input type="text" name="contributions" v-model="anotherHSAAccount.contributions">
            <label for="withdrawals">Withdrawals during current year:</label>
            <input type="text" name="withdrawals" v-model="anotherHSAAccount.withdrawals">
            <label for="end-balance">Balance on December 31, 2018:</label>
            <input type="text" name="end-balance" v-model="anotherHSAAccount.endBalance">
            <p v-if="hsaAccountMsg">{{ hsaAccountMsg }}</p>
            <button @click.prevent="addHSAAccount">Add HSA Account</button>  
          </div>
        </div>
        <div class="field field--financial-gifts">
          <h3>{{ selectedUser.questions[3].title }}:</h3>
          <input type="text" name="financial-gifts" v-model="financialGifts">
        </div>
        <div class="field field--child-support">
          <h3>{{ selectedUser.questions[4].title }}:</h3>
          <input type="text" name="child-support" v-model="childSupport">
        </div>
        <div class="field field--alimony">
          <h3>{{ selectedUser.questions[6].title }}:</h3>
          <input type="text" name="alimony" v-model="alimony">
        </div>
        <button class="update-info" @click.prevent="editClientInfo">Edit Client Info</button>
      </form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'DataForm',
  props: ['selectedUser'],
  data() {
    return {
      anotherClient: {
        name: null,
        dateOfBirth: null
      },
      clients: this.selectedUser.questions[10].questions,
      clientMsg: null,
      anotherBankAccount: {
        startBalance: null,
        endBalance: null
      },
      bankAccounts: this.selectedUser.questions[0].questions,
      bankAccountMsg: null,
      anotherMortgage: {
        startBalance: null,
        endBalance: null
      },
      mortgages: this.selectedUser.questions[2].questions,
      mortgageMsg: null,
      financialGifts: this.selectedUser.questions[3].answer,
      childSupport: this.selectedUser.questions[4].answer,
      anotherCreditCard: {
        startBalance: null,
        endBalance: null
      },
      creditCards: this.selectedUser.questions[5].questions ,
      creditCardMsg: null,
      alimony: null,
      another529Plan: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      plan529Accounts: this.selectedUser.questions[7].questions,
      plan529AccountMsg: null,
      anotherChild: {
        name: null,
        dateOfBirth: null
      },
      children: this.selectedUser.questions[8].questions,
      childMsg: null,
      anotherInvestmentAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      investmentAccounts: this.selectedUser.questions[9].questions,
      investmentAccountMsg: null,
      anotherAutoLoan: {
        startBalance: null,
        endBalance: null
      },
      autoLoans: this.selectedUser.questions[11].questions,
      autoLoanMsg: null,
      anotherStudentLoan: {
        startBalance: null,
        endBalance: null
      },
      studentLoans: this.selectedUser.questions[12].questions,
      studentLoanMsg: null,
      anotherRetirementAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      retirementAccounts: this.selectedUser.questions[13].questions,
      retirementAccountMsg: null,
      anotherHSAAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      hsaAccounts: this.selectedUser.questions[14].questions,
      hsaAccountMsg: null,
    }
  },
  methods: {
    addClient() {      
      if(this.anotherClient.name && this.anotherClient.dateOfBirth) {
        this.selectedUser.questions[10].questions.push(this.anotherClient)
        this.anotherClient = {
          name: null,
          dateOfBirth: null
        }
        this.clientFeedBack = null
      } else {
        this.clientFeedBack = this.msg
      }
    },
    addChild() {
      if(this.anotherChild.name && this.anotherChild.dateOfBirth) {
        this.selectedUser.questions[8].questions.push(this.anotherChild)        
        this.anotherChild = {
          name: null,
          dateOfBirth: null
        }
        this.childFeedBack = null        
      } else {
        this.childFeedBack = this.msg
      }
    },
    addBankAccount() {
      if(this.anotherBankAccount.startBalance && this.anotherBankAccount.endBalance) {
        this.selectedUser.questions[0].questions.push(this.anotherBankAccount)        
        this.anotherBankAccount = {
          startBalance: null,
          endBalance: null
        }
      } else {
        this.bankAccountFeedBack = this.msg
      }
    },
    addMortgage() {
      if(this.anotherMortgage.startBalance && this.anotherMortgage.endBalance) {
        this.selectedUser.questions[2].questions.push(this.anotherMortgage)                
        this.anotherMortgage = {
          startBalance: null,
          endBalance: null
        }
        this.mortgageFeedBack = null        
      } else {
        this.mortgageFeedBack = this.msg
      }
    },
    addCreditCard() {
      if(this.anotherCreditCard.startBalance && this.anotherCreditCard.endBalance) {
        this.selectedUser.questions[5].questions.push(this.anotherCreditCard)                        
        this.anotherCreditCard = {
          startBalance: null,
          endBalance: null
        }
        this.creditCardFeedBack = null        
      } else {
        this.creditCardFeedBack = this.msg
      }
    },
    add529Account() {
      if(this.another529Plan.startBalance && this.another529Plan.endBalance) {
        this.selectedUser.questions[7].questions.push(this.another529Plan)                                
        this.another529Plan = {
          startBalance: null,
          contributions: null,
          withdrawals: null,
          endBalance: null
        }
        this.plan529AccountFeedBack = null        
      } else {
        this.plan529AccountFeedBack = this.msg
      }
    },
    addInvestmentAccount() {
      if(this.anotherInvestmentAccount.startBalance && this.anotherInvestmentAccount.endBalance) {
        this.selectedUser.questions[9].questions.push(this.anotherInvestmentAccount)                                        
        this.anotherInvestmentAccount = {
          startBalance: null,
          contributions: null,
          withdrawals: null,
          endBalance: null
        }
        this.investmentAccountFeedBack = null        
      } else {
        this.investmentAccountFeedBack = this.msg
      }
    },
    addAutoLoan() {
      if(this.anotherAutoLoan.startBalance && this.anotherAutoLoan.endBalance) {
        this.selectedUser.questions[11].questions.push(this.anotherAutoLoan)                                                
        this.anotherAutoLoan = {
          startBalance: null,
          endBalance: null
        }
        this.autoLoanFeedBack = null        
      } else {
        this.autoLoanFeedBack = this.msg
      }
    },
    addStudentLoan() {
      if(this.anotherStudentLoan.startBalance && this.anotherStudentLoan.endBalance) {
        this.selectedUser.questions[12].questions.push(this.anotherStudentLoan)                                                        
        this.anotherStudentLoan = {
          startBalance: null,
          endBalance: null
        }
        this.studentLoansFeedBack = null        
      } else {
        this.studentLoansFeedBack = this.msg
      }
    },
    addRetirementAccount() {
      if(this.anotherRetirementAccount.startBalance && this.anotherRetirementAccount.endBalance) {
        this.selectedUser.questions[13].questions.push(this.anotherRetirementAccount)                                                                
        this.anotherRetirementAccount = {
          startBalance: null,
          contributions: null,
          withdrawals: null,
          endBalance: null
        }
        this.retirementAccountFeedBack = null        
      } else {
        this.retirementAccountFeedBack = this.msg
      }
    },
    addHSAAccount() {
      if(this.anotherHSAAccount.startBalance && this.anotherHSAAccount.endBalance) {
        this.selectedUser.questions[14].questions.push(this.anotherHSAAccount)                                                                        
        this.anotherHSAAccount = {
          startBalance: null,
          contributions: null,
          withdrawals: null,
          endBalance: null
        }
        this.hsaAccountFeedBack = null        
      } else {
        this.hsaAccountFeedBack = this.msg
      }
    },
    editClientInfo() {
      let ref = db.collection('users').where('slug', '==', this.slug)
      if(this.financialGifts) {
        this.selectedUser.questions[3].answer = this.financialGifts
      }    
      if(this.childSupport) {
        this.selectedUser.questions[4].answer = this.childSupport        
      }
      if(this.alimony) {
        this.selectedUser.questions[6].answer = this.alimony       
      }
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.selectedUser.id = doc.id
        })
      }).then(() => {
        db.collection('users').doc(this.selectedUser.id).update({
          questions: this.selectedUser.questions
        })
      })    
    },
  },
  watch: {
    selectedUser() {
        this.clients = this.selectedUser.questions[10].questions
        this.children = this.selectedUser.questions[8].questions        
        this.bankAccounts = this.selectedUser.questions[0].questions        
        this.mortgages = this.selectedUser.questions[2].questions        
        this.financialGifts = this.selectedUser.questions[3].answer        
        this.childSupport = this.selectedUser.questions[4].answer        
        this.creditCards = this.selectedUser.questions[5].questions        
        this.alimony = this.selectedUser.questions[6].answer        
        this.plan529Accounts = this.selectedUser.questions[7].questions        
        this.investmentAccounts = this.selectedUser.questions[9].questions
        this.autoLoans = this.selectedUser.questions[11].questions        
        this.studentLoans = this.selectedUser.questions[12].questions        
        this.retirementAccounts = this.selectedUser.questions[13].questions        
        this.hsaAccounts = this.selectedUser.questions[14].questions   
    }
  },
  created() {

  }
}
</script>

<style lang='scss'>

</style>

