<template>
  <div class="form-data">
    <h2>Information for <span>{{ selectedUser.firstName }} {{ selectedUser.lastName }}</span></h2>
    <div class="admin__selected-user__answers">
      <form @submit.prevent="editQuestions" class="edit-questions__form">
        <div class="field field--client">
          <h3 @click="openSection($event)">{{ selectedUser.questions[14].title }}</h3>
          <div class="questions client-questions">
            <ul>
              <li v-if="clients[key].name" v-for="(client, key) in clients" :key="key">
                <div  class="sub-field">
                  <label for="client-name">Name:</label>
                  <input type="text" name="client-name" v-model="clients[key].name">
                </div>
                <div v-if="clients[key].dateOfBirth" class="sub-field">
                  <label for="client-birthday">Date of Birth:</label>
                  <input  type="text" name="client-birthday" v-model="clients[key].dateOfBirth">
                </div>
              </li>
            </ul>
            <div class="new-question">
              <div for="client-name">
                <label>Name:</label>
                <input type="text" name="client-name" v-model="anotherClient.name">    
              </div>
              <div for="client-birthday">
                <label>Date of Birth:</label>
                <input type="text" name="client-birthday" v-model="anotherClient.dateOfBirth">              
              </div>
              <p v-if="clientMsg">{{ clientMsg }}</p>
              <a @click.prevent="addClient">Add Client</a>  
            </div>
          </div>
        </div>
        <div class="field field--child">
          <h3 @click="openSection($event)">{{ selectedUser.questions[12].title }}</h3>
          <div class="questions child-questions">
            <ul>
              <li v-if="children[key].name" v-for="(child, key) in children" :key="key">
                <div class="sub-field"> 
                  <label for="child-name">Name:</label>
                  <input type="text" name="child-name" v-model="children[key].name">
                </div>
                <div v-if="children[key].dateOfBirth" class="sub-field">
                  <label for="child-birthday">Date of Birth:</label>
                  <input type="text" name="child-birthday" v-model="children[key].dateOfBirth">
                </div>
              </li>
            </ul>
            <div class="new-question">
              <div for="child-name">
                <label>Name:</label>
                <input type="text" name="child-name" v-model="anotherChild.name">              
              </div>
              <div for="child-birthday">
                <label>Date of Birth:</label>
                <input type="text" name="child-birthday" v-model="anotherChild.dateOfBirth">              
              </div>
              <p v-if="childMsg">{{ childMsg }}</p>
              <a @click.prevent="addChild">Add Child</a>  
            </div>
          </div>
        </div>
        <div class="field field--gross-income">
          <h3 @click="openSection($event)">{{ selectedUser.questions[11].title }}:</h3>
          <input type="text" name="gross-income" v-model="grossIncome">
        </div>
        <div class="field field--taxes">
          <h3 @click="openSection($event)">{{ selectedUser.questions[18].title }}:</h3>
          <input type="text" name="taxes" v-model="taxes">
        </div>
        <div class="field field--bank-account">
          <h3 @click="openSection($event)">{{ selectedUser.questions[1].title }}</h3>
          <div class="questions bank-account-questions">
            <ul>
              <li v-if="bankAccounts[key].startBalance" v-for="(account, key) in bankAccounts" :key="key">
                <div class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input  type="text" name="start-balance" v-model="bankAccounts[key].startBalance">
                </div>
                <div v-if="bankAccounts[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="bankAccounts[key].endBalance">
                </div>
              </li>
            </ul>
            <div class="new-question">
              <div for="start-balance">
                <label>Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="anotherBankAccount.startBalance">              
              </div>
              <div for="end-balance">
                <label>Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="anotherBankAccount.endBalance">                
              </div>
              <p v-if="bankAccountMsg">{{ bankAccountMsg }}</p>
              <a @click.prevent="addBankAccount">Add Bank Account</a>  
            </div>
          </div>
        </div>
        <div class="field field--new-mortgages">
          <h3 @click="openSection($event)">{{ selectedUser.questions[3].title }}:</h3>
          <input type="text" name="new-mortgages" v-model="newMortgages">
        </div>
        <div class="field field--mortgage">
          <h3 @click="openSection($event)">{{ selectedUser.questions[4].title }}</h3>
          <div class="questions mortgage-questions">
            <ul>
              <li v-if="mortgages[key].startBalance" v-for="(mortgage, key) in mortgages" :key="key">
                <div class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input  type="text" name="start-balance" v-model="mortgages[key].startBalance">
                </div>
                <div v-if="mortgages[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input  type="text" name="end-balance" v-model="mortgages[key].endBalance">
                </div>
              </li>
            </ul>
            <div class="new-question">
              <div for="start-balance">
                <label>Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="anotherMortgage.startBalance">              
              </div>
              <div for="end-balance">
                <label>Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="anotherMortgage.endBalance">        
              </div>
              <p v-if="mortgageMsg">{{ mortageMsg }}</p>
              <a @click.prevent="addMortgage">Add Mortgage</a>  
            </div>
          </div>
        </div>
        <div class="field field--credit-card">
          <h3 @click="openSection($event)">{{ selectedUser.questions[8].title }}</h3>
          <div class="questions credit-card-questions">
            <ul>
              <li v-if="creditCards[key].startBalance" v-for="(creditCard, key) in creditCards" :key="key">
                <div class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="creditCards[key].startBalance">
                </div>
                <div v-if="creditCards[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="creditCards[key].endBalance">
                </div>
              </li>
            </ul>
            <div class="new-question">
              <div for="start-balance">
                <label>Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="anotherCreditCard.startBalance">              
              </div>
              <div for="end-balance">
                <label>Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="anotherCreditCard.endBalance">              
              </div>
              <p v-if="creditCardMsg">{{ creditCardMsg }}</p>
              <a @click.prevent="addCreditCard">Add Credit Card</a>  
            </div>
          </div>
        </div>
        <div class="field field--529-plan-account">
          <h3 @click="openSection($event)">{{ selectedUser.questions[10].title }}</h3>
          <div class="questions plan-529-account-questions">
            <ul>
              <li v-if="plan529Accounts[key].startBalance" v-for="(account, key) in plan529Accounts" :key="key">
                <div class="sub-field">
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
            <div class="new-question">
              <div for="start-balance">
                <label>Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="another529Plan.startBalance">              
              </div>
              <div for="contributions">
                <label>Contributions during current year:</label>
                <input type="text" name="contributions" v-model="another529Plan.contributions">              
              </div>
              <div for="withdrawals">
                <label>Withdrawals during current year:</label>
                <input type="text" name="withdrawals" v-model="another529Plan.withdrawals">              
              </div>
              <div for="end-balance">
                <label>Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="another529Plan.endBalance">
              </div>
              <p v-if="plan529AccountMsg">{{ plan529AccountMsg }}</p>
              <a @click.prevent="add529Account">Add 529 Plan Account</a>  
            </div>
          </div>
        </div>
        <div class="field field--investment-account">
          <h3 @click="openSection($event)">{{ selectedUser.questions[13].title }}</h3>
          <div class="questions investment-account-questions">
            <ul>
              <li v-if="investmentAccounts[key].startBalance" v-for="(account, key) in investmentAccounts" :key="key">
                <div class="sub-field">
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
            <div class="new-question">
              <div for="start-balance">
                <label>Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="anotherInvestmentAccount.startBalance">               
              </div>
              <div for="contributions">
                <label>Contributions during current year:</label>
                <input type="text" name="contributions" v-model="anotherInvestmentAccount.contributions">                
              </div>
              <div for="withdrawals">
                <label>Withdrawals during current year:</label>
                <input type="text" name="withdrawals" v-model="anotherInvestmentAccount.withdrawals">              
              </div>
              <div for="end-balance">
                <label>Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="anotherInvestmentAccount.endBalance">               
              </div>
              <p v-if="investmentAccountMsg">{{ investmentAccountMsg }}</p>
              <a @click.prevent="addInvestmentAccount">Add Investment Account</a> 
            </div> 
          </div>
        </div>
        <div class="field field--new-auto-loans">
          <h3 @click="openSection($event)">{{ selectedUser.questions[0].title }}:</h3>
          <input type="text" name="new-auto-loans" v-model="newAutoLoans">
        </div>
        <div class="field field--auto-loan">
          <h3 @click="openSection($event)">{{ selectedUser.questions[15].title }}</h3>
          <div class="questions auto-loan-questions">
            <ul>
              <li v-if="autoLoans[key].startBalance" v-for="(autoLoan, key) in autoLoans" :key="key">
                <div class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="autoLoans[key].startBalance">
                </div>
                <div v-if="autoLoans[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="autoLoans[key].endBalance">
                </div>
              </li>
            </ul>
            <div class="new-question">
              <div for="start-balance">
                <label>Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="anotherAutoLoan.startBalance">              
              </div>
              <div for="end-balance">
                <label>Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="anotherAutoLoan.endBalance">              
              </div>
              <p v-if="autoLoanMsg">{{ autoLoanMsg }}</p>
              <a @click.prevent="addAutoLoan">Add Auto Loan</a>  
            </div>
          </div>
        </div>
        <div class="field field--new-student-loans">
          <h3 @click="openSection($event)">{{ selectedUser.questions[6].title }}:</h3>
          <input type="text" name="new-student-loans" v-model="newStudentLoans">
        </div>
        <div class="field field--student-loan">
          <h3 @click="openSection($event)">{{ selectedUser.questions[16].title }}</h3>
          <div class="questions student-loan-questions">
            <ul>
              <li v-if="studentLoans[key].startBalance" v-for="(studentLoan, key) in studentLoans" :key="key">
                <div class="sub-field">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input type="text" name="start-balance" v-model="studentLoans[key].startBalance">
                </div>
                <div v-if="studentLoans[key].endBalance" class="sub-field">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input type="text" name="end-balance" v-model="studentLoans[key].endBalance">
                </div>
              </li>
            </ul>
            <div class="new-question">
              <div for="start-balance">
                <label>Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="anotherStudentLoan.startBalance">              
              </div>
              <div for="end-balance">
                <label>Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="anotherStudentLoan.endBalance">                
              </div>
              <p v-if="studentLoanMsg">{{ studentLoanMsg }}</p>
              <a @click.prevent="addStudentLoan">Add Student Loan</a>  
            </div>
          </div>
        </div>
        <div class="field field--retirement-account">
          <h3 @click="openSection($event)">{{ selectedUser.questions[17].title }}</h3>
          <div class="questions retirement-account-questions">
            <ul>
              <li v-if="retirementAccounts[key].startBalance" v-for="(account, key) in retirementAccounts" :key="key">
                <div class="sub-field">
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
            <div class="new-question">
              <div for="start-balance">
                <label> Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="anotherRetirementAccount.startBalance">             
              </div>
              <div for="contributions">
                <label> Contributions during current year:</label>
                <input type="text" name="contributions" v-model="anotherRetirementAccount.contributions">              
              </div>
              <div for="withdrawals">
                <label> Withdrawals during current year:</label>
                <input type="text" name="withdrawals" v-model="anotherRetirementAccount.withdrawals">              
              </div>
              <div for="end-balance">
                <label> Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="anotherRetirementAccount.endBalance">
              </div>
              <p v-if="retirementAccountMsg">{{ retirementAccountMsg }}</p>
              <a @click.prevent="addRetirementAccount">Add Retirement Account</a>  
            </div>
          </div>
        </div>
        <div class="field field--hsa-account">
          <h3 @click="openSection($event)">{{ selectedUser.questions[19].title }}</h3>
          <div class="questions hsa-account-questions">
            <ul>
              <li v-if="hsaAccounts[key].startBalance" v-for="(account, key) in hsaAccounts" :key="key">
                <div class="sub-field">
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
            <div class="new-question">
              <div>
                <label for="start-balance">Balance on January 1, 2018:</label>
                <input type="text" name="start-balance" v-model="anotherHSAAccount.startBalance">
              </div>
              <div>
                <label for="contributions">Contributions during current year:</label>
                <input type="text" name="contributions" v-model="anotherHSAAccount.contributions">
              </div>
              <div>
                <label for="withdrawals">Withdrawals during current year:</label>
                <input type="text" name="withdrawals" v-model="anotherHSAAccount.withdrawals">
              </div>
              <div>
                <label for="end-balance">Balance on December 31, 2018:</label>
                <input type="text" name="end-balance" v-model="anotherHSAAccount.endBalance">              
              </div>
              <p v-if="hsaAccountMsg">{{ hsaAccountMsg }}</p>
              <a @click.prevent="addHSAAccount">Add HSA Account</a>   
            </div>
          </div>
        </div>
        <div class="field field--financial-gifts">
          <h3 @click="openSection($event)">{{ selectedUser.questions[5].title }}:</h3>
          <input type="text" name="financial-gifts" v-model="financialGifts">
        </div>
        <div class="field field--child-support">
          <h3 @click="openSection($event)">{{ selectedUser.questions[7].title }}:</h3>
          <input type="text" name="child-support" v-model="childSupport">
        </div>
        <div class="field field--alimony">
          <h3 @click="openSection($event)">{{ selectedUser.questions[9].title }}:</h3>
          <input type="text" name="alimony" v-model="alimony">
        </div>
        <button class="update-info" @click.prevent="editClientInfo">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  name: 'DataForm',
  props: ['selectedUser'],
  data() {
    return {
      msg: 'You must enter a value in all fields',
      firstName: null,
      lastName: null,
      feedback: null,
      anotherClient: {
        name: null,
        dateOfBirth: null
      },
      clients: this.selectedUser.questions[14].questions,
      clientMsg: null,
      anotherBankAccount: {
        startBalance: null,
        endBalance: null
      },
      bankAccounts: this.selectedUser.questions[1].questions,
      bankAccountMsg: null,
      anotherMortgage: {
        startBalance: null,
        endBalance: null
      },
      mortgages: this.selectedUser.questions[4].questions,
      mortgageMsg: null,
      financialGifts: this.selectedUser.questions[5].answer,
      childSupport: this.selectedUser.questions[7].answer,
      grossIncome: this.selectedUser.questions[11].answer,
      taxes: this.selectedUser.questions[18].answer,
      newMortgages: this.selectedUser.questions[3].answer,
      newAutoLoans: this.selectedUser.questions[0].answer,
      newStudentLoans: this.selectedUser.questions[6].answer,
      anotherCreditCard: {
        startBalance: null,
        endBalance: null
      },
      creditCards: this.selectedUser.questions[8].questions ,
      creditCardMsg: null,
      alimony: null,
      another529Plan: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      plan529Accounts: this.selectedUser.questions[10].questions,
      plan529AccountMsg: null,
      anotherChild: {
        name: null,
        dateOfBirth: null
      },
      children: this.selectedUser.questions[12].questions,
      childMsg: null,
      anotherInvestmentAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      investmentAccounts: this.selectedUser.questions[13].questions,
      investmentAccountMsg: null,
      anotherAutoLoan: {
        startBalance: null,
        endBalance: null
      },
      autoLoans: this.selectedUser.questions[15].questions,
      autoLoanMsg: null,
      anotherStudentLoan: {
        startBalance: null,
        endBalance: null
      },
      studentLoans: this.selectedUser.questions[16].questions,
      studentLoanMsg: null,
      anotherRetirementAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      retirementAccounts: this.selectedUser.questions[17].questions,
      retirementAccountMsg: null,
      anotherHSAAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      hsaAccounts: this.selectedUser.questions[19].questions,
      hsaAccountMsg: null,
    }
  },
  methods: {
    openSection(e) {
      const fields = document.getElementsByClassName('field');
      for(let field of fields) {
        field.classList.remove('active')
      }
      e.target.parentElement.classList.add('active')
    },
    addClient() {      
      if(this.anotherClient.name && this.anotherClient.dateOfBirth) {
        this.selectedUser.questions[14].questions.push(this.anotherClient)
        console.log(this.selectedUser.questions[14].questions)
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
        this.selectedUser.questions[12].questions.push(this.anotherChild)        
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
        this.selectedUser.questions[1].questions.push(this.anotherBankAccount)        
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
        this.selectedUser.questions[4].questions.push(this.anotherMortgage)                
        this.anotherMortgage = {
          startBalance: null,
          newMortgage: null,
          endBalance: null
        }
        this.mortgageFeedBack = null        
      } else {
        this.mortgageFeedBack = this.msg
      }
    },
    addCreditCard() {
      if(this.anotherCreditCard.startBalance && this.anotherCreditCard.endBalance) {
        this.selectedUser.questions[8].questions.push(this.anotherCreditCard)                        
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
        this.selectedUser.questions[10].questions.push(this.another529Plan)                                
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
        this.selectedUser.questions[13].questions.push(this.anotherInvestmentAccount)                                        
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
        this.selectedUser.questions[15].questions.push(this.anotherAutoLoan)                                                
        this.anotherAutoLoan = {
          startBalance: null,
          newAutoLoan: null,
          endBalance: null
        }
        this.autoLoanFeedBack = null        
      } else {
        this.autoLoanFeedBack = this.msg
      }
    },
    addStudentLoan() {
      if(this.anotherStudentLoan.startBalance && this.anotherStudentLoan.endBalance) {
        this.selectedUser.questions[16].questions.push(this.anotherStudentLoan)                                                        
        this.anotherStudentLoan = {
          startBalance: null,
          newStudentLoan: null,
          endBalance: null
        }
        this.studentLoansFeedBack = null        
      } else {
        this.studentLoansFeedBack = this.msg
      }
    },
    addRetirementAccount() {
      if(this.anotherRetirementAccount.startBalance && this.anotherRetirementAccount.endBalance) {
        this.selectedUser.questions[17].questions.push(this.anotherRetirementAccount)                                                                
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
        this.selectedUser.questions[19].questions.push(this.anotherHSAAccount)                                                                        
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
      let ref = db.collection('users').where('slug', '==', this.selectedUser.slug)
      if(this.financialGifts) {
        this.selectedUser.questions[5].answer = this.financialGifts
      }    
      if(this.childSupport) {
        this.selectedUser.questions[7].answer = this.childSupport        
      }
      if(this.alimony) {
        this.selectedUser.questions[9].answer = this.alimony       
      }
      if(this.grossIncome) {
        this.selectedUser.questions[11].answer = this.grossIncome       
      }
      if(this.taxes) {
        this.selectedUser.questions[18].answer = this.taxes       
      }
      if(this.newAutoLoans) {
        this.selectedUser.questions[0].answer = this.newAutoLoans       
      }
      if(this.newStudentLoans) {
        this.selectedUser.questions[6].answer = this.newStudentLoans       
      }
      if(this.newMortgages) {
        this.selectedUser.questions[3].answer = this.newMortgages       
      }
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.selectedUser.id = doc.id
        })
      }).then(() => {
        db.collection('users').doc(this.selectedUser.id).update({
          questions: this.selectedUser.questions
        })
      }).then(() => {
        ref.get().then(snapshot => {
          snapshot.forEach(doc => {
            this.selectedUser.id = doc.id
            let user = doc.data()
            console.log(user.questions[9].answer)
            this.clients = user.questions[14].questions
            this.children = user.questions[12].questions        
            this.bankAccounts = user.questions[1].questions        
            this.mortgages = user.questions[4].questions        
            this.financialGifts = user.questions[5].answer        
            this.childSupport = user.questions[7].answer        
            this.creditCards = user.questions[8].questions        
            this.alimony = user.questions[9].answer        
            this.plan529Accounts = user.questions[10].questions        
            this.investmentAccounts = user.questions[13].questions
            this.autoLoans = user.questions[15].questions        
            this.studentLoans = user.questions[16].questions        
            this.retirementAccounts = user.questions[17].questions        
            this.hsaAccounts = user.questions[19].questions   
            this.grossIncome = user.questions[11].answer
            this.taxes = user.questions[18].answer
            this.newAutoLoans = user.questions[0].answer
            this.newStudentLoans = user.questions[6].answer
            this.newMortgages = user.questions[3].answer
            
          })
          const fields = document.getElementsByClassName('field');
          for(let field of fields) {
            field.classList.remove('active')
          }
          this.$store.commit('toggleTray')
        })
      })    
    },
  },
  watch: {
    selectedUser() {
        this.clients = this.selectedUser.questions[14].questions
        this.children = this.selectedUser.questions[12].questions        
        this.bankAccounts = this.selectedUser.questions[1].questions        
        this.mortgages = this.selectedUser.questions[4].questions        
        this.financialGifts = this.selectedUser.questions[5].answer        
        this.childSupport = this.selectedUser.questions[7].answer        
        this.creditCards = this.selectedUser.questions[8].questions        
        this.alimony = this.selectedUser.questions[9].answer        
        this.plan529Accounts = this.selectedUser.questions[10].questions        
        this.investmentAccounts = this.selectedUser.questions[13].questions
        this.autoLoans = this.selectedUser.questions[15].questions        
        this.studentLoans = this.selectedUser.questions[16].questions        
        this.retirementAccounts = this.selectedUser.questions[17].questions        
        this.hsaAccounts = this.selectedUser.questions[19].questions   
        this.grossIncome = this.selectedUser.questions[11].answer
        this.taxes = this.selectedUser.questions[18].answer
        this.newAutoLoans = this.selectedUser.questions[0].answer
        this.newStudentLoans = this.selectedUser.questions[6].answer
        this.newMortgages = this.selectedUser.questions[3].answer
    }
  },
  created() {
    
  }
}
</script>

<style lang='scss'>

  $color-green-light: #b0c986;
  $color-green: #7ba636;
  $color-green-dark: #577937;
  $color-blue: #b5c7e8;
  $color-white: #fff;
  $color-black: #333333;
  $color-grey: #666;
  $color-grey-light: #999;
  $color-blue-dark: #014584;

  .form-data {
    height: calc(100vh - 120px);
    overflow: scroll;

    .sidebar & {
      height: 100vh;
    }

    h2 {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 700;
      color: $color-black;

      span {
        color: $color-green-dark;
      }
    }
  }
  .field {
    // margin-bottom: 60px;
    max-height: 36px;
    // background: $color-white;
    border-bottom: 1px solid $color-grey-light;
    overflow: hidden;
    transition: max-height .5s;

    &.active {
      max-height: 1000px;
    }
    
    h3 {
      margin-bottom: 10px;
      padding: 10px 5px;
      font-size: 16px;
      font-weight: 700;
      // background: rgba($color-grey-light, .5);
    }
  }
  .questions {
    margin-bottom: 60px;

    ul {
      display: flex; 
      flex-wrap: wrap;
      margin-bottom: 20px;   
    }
    li {
      display: flex;
      flex-direction: column;
      margin: 10px 40px;
      margin-left: 0;
      padding: 40px 60px;
      border: 1px solid $color-grey-light;
      border-radius: 10px;
      box-shadow: 2px 2px 5px $color-grey-light;

      .sub-field {
        display: flex;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        label {
          flex-grow: 1;
          margin-right: 10px;
        }
      }
    }
    .new-question {
      display: inline-flex;
      flex-direction: column;
      width: auto;

      div {
        display: flex;
        margin-bottom: 5px;

        label {
          flex-grow: 1;
          margin-right: 10px;
        }
        input {
          border-color: $color-grey-light;
        }
      }
      a {
        margin-top: 5px;
        color: $color-green-dark;
        font-size: 13px;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
  input {
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid rgba($color-grey-light, .5);

    .field--financial-gifts &,
    .field--child-support &,
    .field--alimony & {
      margin-bottom: 40px;
    }
  }
  .update-info {
    margin: 20px 0 40px;
    padding: 10px 30px;
    border-radius: 10px;
    border: none;
    box-shadow: none;
    background-color: $color-green; 
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    color: $color-white;
    cursor: pointer;
    transition: .3s ease-out;

    &:hover {
      box-shadow: 2px 2px 5px $color-grey-light;
    }
  }
</style>

