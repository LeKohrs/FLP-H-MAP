<template>
  <div class="home">
    <div v-if="$store.state.showLogin" class="login">
      <form @submit.prevent="login" action="">
        <h2>Login</h2>
        <div class="field">
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password">
        </div>
        <p v-if="feedback">{{ feedback }}</p>
        <div class="field">
          <button>Login</button>
        </div>
      </form>
    </div>
    <div v-if="showMap" class="hmap">
      <h1>There be maps here!</h1>
    </div>
    <section class="sidebar">
      <div v-if="this.$store.state.selectedUser" class="question-review">
        <form @submit.prevent="editQuestions" class="edit-questions__form">
          <div class="field--client">
            <h3>{{ selectedUser.questions[10].title }}</h3>
            <div class="client-questions">
              <ul>
                <li v-for="(client, key) in clients" :key="key">
                  <label for="client-name">Name:</label>
                  <input type="text" name="client-name" v-model="clients[key].name">
                  <label for="client-birthday">Date of Birth:</label>
                  <input v-if="clients[key].dateOfBirth" type="text" name="client-birthday" v-model="clients[key].dateOfBirth">
                </li>
              </ul>
              <label for="client-name">Name:</label>
              <input type="text" name="client-name" v-model="anotherClient.name">
              <label for="client-birthday">Date of Birth:</label>
              <input type="text" name="client-birthday" v-model="anotherClient.dateOfBirth">
              <p v-if="clientMsg">{{ clientMsg }}</p>
              <button @click.prevent="addClient">Add Client</button>  
            </div>
          </div>
          <div class="field--client">
            <h3>{{ selectedUser.questions[8].title }}</h3>
            <div class="client-questions">
              <ul>
                <li v-for="(child, key) in children" :key="key">
                  <label for="child-name">Name:</label>
                  <input v-if="children[key].name" type="text" name="child-name" v-model="children[key].name">
                  <label for="child-birthday">Date of Birth:</label>
                  <input v-if="children[key].dateOfBirth" type="text" name="child-birthday" v-model="children[key].dateOfBirth">
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
          <div class="field--bank-account">
            <h3>{{ selectedUser.questions[0].title }}</h3>
            <div class="bank-account-questions">
              <ul>
                <li v-for="(account, key) in bankAccounts" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="bankAccounts[key].startBalance" type="text" name="start-balance" v-model="bankAccounts[key].startBalance">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="bankAccounts[key].endBalance" type="text" name="end-balance" v-model="bankAccounts[key].endBalance">
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
          <div class="field--mortgage">
            <h3>{{ selectedUser.questions[2].title }}</h3>
            <div class="mortgage-questions">
              <ul>
                <li v-for="(mortgage, key) in mortgages" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="mortgages[key].startBalance" type="text" name="start-balance" v-model="mortgages[key].startBalance">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="mortgages[key].endBalance" type="text" name="end-balance" v-model="mortgages[key].endBalance">
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
          <div class="field--credit-card">
            <h3>{{ selectedUser.questions[5].title }}</h3>
            <div class="credit-card-questions">
              <ul>
                <li v-for="(creditCard, key) in creditCards" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="creditCards[key].startBalance" type="text" name="start-balance" v-model="creditCards[key].startBalance">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="creditCards[key].endBalance" type="text" name="end-balance" v-model="creditCards[key].endBalance">
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
          <div class="field--529-plan-account">
            <h3>{{ selectedUser.questions[7].title }}</h3>
            <div class="plan-529-account-questions">
              <ul>
                <li v-for="(account, key) in plan529Accounts" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="plan529Accounts[key].startBalance" type="text" name="start-balance" v-model="plan529Accounts[key].startBalance">
                  <label for="contributions">Contributions during current year:</label>
                  <input v-if="plan529Accounts[key].contributions" type="text" name="contributions" v-model="plan529Accounts[key].contributions">
                  <label for="withdrawals">Withdrawals during current year:</label>
                  <input v-if="plan529Accounts[key].withdrawals" type="text" name="withdrawals" v-model="plan529Accounts[key].withdrawals">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="plan529Accounts[key].endBalance" type="text" name="end-balance" v-model="plan529Accounts[key].endBalance">
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
          <div class="field--investment-account">
            <h3>{{ selectedUser.questions[9].title }}</h3>
            <div class="investment-account-questions">
              <ul>
                <li v-for="(account, key) in investmentAccounts" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="investmentAccounts[key].startBalance" type="text" name="start-balance" v-model="investmentAccounts[key].startBalance">
                  <label for="contributions">Contributions during current year:</label>
                  <input v-if="investmentAccounts[key].contributions" type="text" name="contributions" v-model="investmentAccounts[key].contributions">
                  <label for="withdrawals">Withdrawals during current year:</label>
                  <input v-if="investmentAccounts[key].withdrawals" type="text" name="withdrawals" v-model="investmentAccounts[key].withdrawals">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="investmentAccounts[key].endBalance" type="text" name="end-balance" v-model="investmentAccounts[key].endBalance">
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
          <div class="field--auto-loan">
            <h3>{{ selectedUser.questions[11].title }}</h3>
            <div class="auto-loan-questions">
              <ul>
                <li v-for="(autoLoan, key) in autoLoans" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="autoLoans[key].startBalance" type="text" name="start-balance" v-model="autoLoans[key].startBalance">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="autoLoans[key].endBalance" type="text" name="end-balance" v-model="autoLoans[key].endBalance">
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
            <div class="field--student-loan">
            <h3>{{ selectedUser.questions[12].title }}</h3>
            <div class="student-loan-questions">
              <ul>
                <li v-for="(studentLoan, key) in studentLoans" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="studentLoans[key].startBalance" type="text" name="start-balance" v-model="studentLoans[key].startBalance">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="studentLoans[key].endBalance" type="text" name="end-balance" v-model="studentLoans[key].endBalance">
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
          <div class="field--retirement-account">
            <h3>{{ selectedUser.questions[13].title }}</h3>
            <div class="retirement-account-questions">
              <ul>
                <li v-for="(account, key) in retirementAccounts" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="retirementAccounts[key].startBalance" type="text" name="start-balance" v-model="retirementAccounts[key].startBalance">
                  <label for="contributions">Contributions during current year:</label>
                  <input v-if="retirementAccounts[key].contributions" type="text" name="contributions" v-model="retirementAccounts[key].contributions">
                  <label for="withdrawals">Withdrawals during current year:</label>
                  <input v-if="retirementAccounts[key].withdrawals" type="text" name="withdrawals" v-model="retirementAccounts[key].withdrawals">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="retirementAccounts[key].endBalance" type="text" name="end-balance" v-model="retirementAccounts[key].endBalance">
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
          <div class="field--hsa-account">
            <h3>{{ selectedUser.questions[14].title }}</h3>
            <div class="hsa-account-questions">
              <ul>
                <li v-for="(account, key) in hsaAccounts" :key="key">
                  <label for="start-balance">Balance on January 1, 2018:</label>
                  <input v-if="hsaAccounts[key].startBalance" type="text" name="start-balance" v-model="hsaAccounts[key].startBalance">
                  <label for="contributions">Contributions during current year:</label>
                  <input v-if="hsaAccounts[key].contributions" type="text" name="contributions" v-model="hsaAccounts[key].contributions">
                  <label for="withdrawals">Withdrawals during current year:</label>
                  <input v-if="hsaAccounts[key].withdrawals" type="text" name="withdrawals" v-model="hsaAccounts[key].withdrawals">
                  <label for="end-balance">Balance on December 31, 2018:</label>
                  <input v-if="hsaAccounts[key].endBalance" type="text" name="end-balance" v-model="hsaAccounts[key].endBalance">
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
          <div class="field--financial-gifts">
            <h3>{{ selectedUser.questions[3].title }}:</h3>
            <input type="text" name="financial-gifts" v-model="financialGifts">
          </div>
          <div class="field--child-support">
            <h3>{{ selectedUser.questions[4].title }}:</h3>
            <input type="text" name="child-support" v-model="childSupport">
          </div>
          <div class="field--alimony">
            <h3>{{ selectedUser.questions[6].title }}:</h3>
            <input type="text" name="alimony" v-model="alimony">
          </div>
          <button class="update-info" @click.prevent="editClientInfo">Edit Client Info</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import db from '@/firebase/init'
import Hmap from '@/components/Hmap.vue'
import Login from '@/components/Login.vue'
import DataForm from '@/components/DataForm.vue'


export default {
  name: 'home',
  components: {
    Hmap,
    Login,
    DataForm
  },
  data() {
    return {
      selectedUser: this.$store.state.selectedUser,
      loggedinUser: this.$store.state.loggedinUser,
      email: null,
      password: null,
      feedback: null,
      showMap: false,
      showLogin: this.$store.state.showLogin,
      userId: null,
      allQuestions: [],
      msg: 'You must enter a value in all fields',
      firstName: null,
      lastName: null,
      feedback: null,
      showSelectedClient: false, 
      anotherClient: {
        name: null,
        dateOfBirth: null
      },
      clients: [],
      clientMsg: null,
      anotherBankAccount: {
        startBalance: null,
        endBalance: null
      },
      bankAccounts: [],
      bankAccountMsg: null,
      anotherMortgage: {
        startBalance: null,
        endBalance: null
      },
      mortgages: [],
      mortgageMsg: null,
      financialGifts: null,
      childSupport: null,
      anotherCreditCard: {
        startBalance: null,
        endBalance: null
      },
      creditCards: [],
      creditCardMsg: null,
      alimony: null,
      another529Plan: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      plan529Accounts: [],
      plan529AccountMsg: null,
      anotherChild: {
        name: null,
        dateOfBirth: null
      },
      children: [],
      childMsg: null,
      anotherInvestmentAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      investmentAccounts: [],
      investmentAccountMsg: null,
      anotherAutoLoan: {
        startBalance: null,
        endBalance: null
      },
      autoLoans: [],
      autoLoanMsg: null,
      anotherStudentLoan: {
        startBalance: null,
        endBalance: null
      },
      studentLoans: [],
      studentLoanMsg: null,
      anotherRetirementAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      retirementAccounts: [],
      retirementAccountMsg: null,
      anotherHSAAccount: {
        startBalance: null,
        contributions: null,
        withdrawals: null,
        endBalance: null
      },
      hsaAccounts: [],
      hsaAccountMsg: null,
    }
  },
  methods: {
    addClient() {      
      if(this.anotherClient.name && this.anotherClient.dateOfBirth) {
        this.clients.push(this.anotherClient)
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
        this.children.push(this.anotherChild)
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
        this.bankAccounts.push(this.anotherBankAccount)
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
        this.mortgages.push(this.anotherMortgage)
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
        this.creditCards.push(this.anotherCreditCard)
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
        this.plan529Accounts.push(this.another529Plan)
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
        this.investmentAccounts.push(this.anotherInvestmentAccount)
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
        this.autoLoans.push(this.anotherAutoLoan)
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
        this.studentLoans.push(this.anotherStudentLoan)
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
        this.retirementAccounts.push(this.anotherRetirementAccount)
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
        this.hsaAccounts.push(this.anotherHSAAccount)
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
    login() {
      if(this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {          
          this.$store.state.userId = cred.user.uid
        }).then(() => {
          let ref = db.collection('users').where('user_id', '==', this.$store.state.userId)
          ref.get().then(snapshot => {
            snapshot.forEach(doc => {
              this.$store.state.loggedinUser = doc.data()
              this.$store.state.loggedinUser.id = doc.id
              localStorage.setItem('user', this.$store.state.userId)
            })
          }).then(() => {
            if(this.$store.state.loggedinUser) {
              if(this.$store.state.loggedinUser.role === 'admin') {
                this.$router.push({ name: 'admin' })
              } else if(this.$store.state.loggedinUser.role === 'user') {
                this.$router.push({ name: 'client' })
              }
              this.$store.state.showLogin = false
            }
          })
        }).catch(err => {
          this.feedback = err.message
        })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  },
  created() {
    if(localStorage.getItem('user')) {
      this.$store.state.userId = localStorage.getItem('user')
      let ref = db.collection('users').where('user_id', '==', this.$store.state.userId)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.$store.state.loggedinUser = doc.data()
          this.$store.state.loggedinUser.id = doc.id
          localStorage.setItem('user', this.$store.state.userId)
        })
      }).then(() => {
        this.$store.state.showLogin = false
      })
    }
    else {
      this.$store.state.showLogin = true
    }
    
    if(this.$store.state.selectedUser) {
      // this.selectedUser = this.$store.state.selectedUser
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
    if(this.$store.state.loggedinUser) {
      this.loggedinUser = this.$store.state.loggedinUser
    } else {
      this.showLogin = true
      this.showMap = false
    }
    if(!this.selectedUser) {
      this.showLogin = true
    } else {
      this.showLogin = false
    }

    db.collection('questions').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let question = doc.data()
        question.id = doc.id
        question.checked = false
        question.show = true
        this.allQuestions.push(question)
      })
    })
  },
  computed: {

  }
}
</script>
