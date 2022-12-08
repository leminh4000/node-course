const users=["Bob", "John", "Alex"]
const leader="Alex"
const filteredUsers=users.filter(user=> user !== leader
)
console.log(filteredUsers)


const tokens=[
    {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhlZTg2MjYyZDg5MDM1ZjM5YmNhMjIiLCJpYXQiOjE2NzA0MDI2OTZ9.CyNYMrLwzvGnuqbp_d0lnuUtSXM2mV79HDjrl8fLCbo',
      _id: "639052888c3ec96aa5671ecb"
    },
    {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhlZTg2MjYyZDg5MDM1ZjM5YmNhMjIiLCJpYXQiOjE2NzA0MDI2OTZ9.CyNYMrLwzvGnuqbp_d0lnuUtSXM2mV79HDjrl8fLCbo',
      _id: "639052888c3ec96aa5671ed3"
    },
    {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhlZTg2MjYyZDg5MDM1ZjM5YmNhMjIiLCJpYXQiOjE2NzA0MDI2OTh9.aoneU95dV197l7E6Yypl11m_h_loupcf8c6p3yG1BFE',
      _id: "6390528a8c3ec96aa5671ed8"
    },
    {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhlZTg2MjYyZDg5MDM1ZjM5YmNhMjIiLCJpYXQiOjE2NzA0MDI2OTl9.IopW0THlHu1zS6tSDinHV-FgZvcCDvvutpxIM9A2xkg',
      _id: "6390528b8c3ec96aa5671ede"
    },
    {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhlZTg2MjYyZDg5MDM1ZjM5YmNhMjIiLCJpYXQiOjE2NzA0MDI4Mjd9.wwIOkgMNYu-_4M7A485JrgMCqG-KZJq371K7-oi_z3c',
      _id: "6390530b8c3ec96aa5671ee5"
    },
    {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhlZTg2MjYyZDg5MDM1ZjM5YmNhMjIiLCJpYXQiOjE2NzA0MDI4Mjh9.VUTWw2bp8z67XtfPfftjOLYAALCDWGS2jErUyAaLLSo',
      _id: "6390530c8c3ec96aa5671eed"
    }
  ]

const myToken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhlZTg2MjYyZDg5MDM1ZjM5YmNhMjIiLCJpYXQiOjE2NzA0MDI2OTZ9.CyNYMrLwzvGnuqbp_d0lnuUtSXM2mV79HDjrl8fLCbo' 

const filterTokens=tokens.filter(token=>token.token!== myToken)
console.log(filterTokens.length)