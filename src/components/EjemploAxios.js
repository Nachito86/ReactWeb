import React, {Component} from 'react'
import axios from 'axios';
//este nombre debe ser igual archivo

  export default class EjemploAxios extends React.Component {
    state = {
      contactos: []
    }
    
    componentDidMount() {
   

        axios.get('https://ucontiental13.crm2.dynamics.com/api/data/v9.1/contacts?$select=emailaddress1,mobilephone, fullname',
                    {
                        headers:{'content-type':'application/json','cache-control':'no-cache',
                                 'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiJodHRwczovL3Vjb250aWVudGFsMTMuY3JtMi5keW5hbWljcy5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85NjYyMzNlMy0wYjc1LTRjNzctODc3YS1kOWI3MGE2OWVhMDEvIiwiaWF0IjoxNjA3NTMxMTY1LCJuYmYiOjE2MDc1MzExNjUsImV4cCI6MTYwNzUzNTA2NSwiYWlvIjoiRTJSZ1lOaDk3Y0Y4RFZQWGowY2ZYVkhkS2JYdkZnQT0iLCJhcHBpZCI6ImE3Yjg3NGUxLTMyNTctNDcyMS1hY2RiLTYzOTJjZGUyOGI5ZSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0Lzk2NjIzM2UzLTBiNzUtNGM3Ny04NzdhLWQ5YjcwYTY5ZWEwMS8iLCJvaWQiOiIzZmVlYThjZS1kNzA5LTRmYTctOTg2OS0wN2VhMjg3YjVmMDYiLCJyaCI6IjAuQUFBQTR6TmlsblVMZDB5SGV0bTNDbW5xQWVGMHVLZFhNaUZIck50amtzM2lpNTRQQUFBLiIsInN1YiI6IjNmZWVhOGNlLWQ3MDktNGZhNy05ODY5LTA3ZWEyODdiNWYwNiIsInRpZCI6Ijk2NjIzM2UzLTBiNzUtNGM3Ny04NzdhLWQ5YjcwYTY5ZWEwMSIsInV0aSI6Ik5nWW5ZRHlvcTBtU2M4dXhsZjB5QVEiLCJ2ZXIiOiIxLjAifQ.KHWgPYBfe0OAWyEitLixzAFdnnvdJeJdjSyfKhbYUkA46xhhqlluRLYaSaWk2EVYbXO6gBvfjs221igkDKBHziYJKOXIFaDPKA-K4GZnQsrix7exSXgIhTnRS6ox0KWFI81jqDLpFQrqf7irB3aFh76dGZSRC9_kRwvmvLPLIxLp6ekb1QxPmCx1cmp0lCG0CjeKHKCBuUsPafKQLrlQ-eBQoiFfFEFPZluv5kQNMAxy204PPE0i0fu7Aw7uiX3-ZysJEP67uwcTm3wc-nA2EKD5jFR3JGbsUjDrp7sRQuP07Irw8KerJPHcAvHhCCYPXbPsea33DW6ofYx0NRA3Pg' }
                    })
        .then(res => {
          const contactos = res.data.value;
          this.setState({ contactos });
        })
        
    }
  
    render() {
      return (
       // <ul>
        //{this.state.contactos.map(person => <li>{person.fullname +" - " + person.emailaddress1}</li>) }
      //</ul>
      <div className="table-responsive-sm">
                <table className="table">
                    <thead>
                      <tr>
                        <th>NOMBRE COMPLETO</th>
                        <th>EMAIL</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.contactos.map(person => <tr><td>{person.fullname} </td><td> {person.emailaddress1}</td></tr>) }

                    </tbody>
                  </table>
                  </div>

          
      )
    }
  }