/*********************************************************************************
*  WEB222 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ____JIMIN SEO______ Student ID: ___145803169_____ Date: _15 FEB 2018______
*
********************************************************************************/ 


/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

var CustomerDB =
    {
        customers :[], addresses : [], stores :[],
        
        insertData:function(allData)
        {
           for(var i = 0 ; i < allData.length ; i++)
           {
               switch(allData[i].type)
                {             
                case "customer":
                  this.addCustomer(allData[i].data);
                  break;
                    
                case "store":
                   this.addStore(allData[i].data);
                   break;
                    
                case "address":
                    this.addAddress(allData[i].data);
                    break;
                }
           }  
        },          
 
        addCustomer:function(customerObj)
        {
          customerObj.add_date = new Date();
          this.customers.push(customerObj);
        },
     
        addStore:function(storeObj)
        {
          this.stores.push(storeObj);
        },
 
        addAddress:function(addressObj)
        {
          this.addresses.push(addressObj);
        },
        
        getStoreById:function(store_id)
        {
            for(var i = 0; i < this.stores.length ;i++)
            {
               if(this.stores[i].store_id === store_id ) 
                   var j=i;;
            }
            
            return j;
        },
        
        getAddressById:function(address_id)
        {   
            for(var i = 0; i < this.addresses.length ;i++)
            {
               if(this.addresses[i].address_id === address_id ) 
                  var j=i;  
            } 
           
            return j; 
        }, 
        
        removeCustomerById:function(customer_id)
        {
          var newArr = [];
            var remove_address_id=-1;
          
            for(var i=0; i < this.customers.length;i++)
                {
                    if(this.customers[i].customer_id != customer_id)
                        { newArr.push(this.customers[i]);}
                    else
                        {remove_address_id = this.customers[i].address_id;}
                }
          this.customers =newArr;
          this.removeAddressById(remove_address_id);
     
        },
        
       removeAddressById:function(address_id)
       {           
           var found = false;

           for(var i = 0; i < this.customers.length; i++)
           { 
              if(this.customers[i].address_id == address_id)
               { found = true;}
           }   

           for(var i = 0; i < this.stores.length; i++)
           {     
              if(this.stores[i].address_id == address_id)
              { found = true; }
           } 

            if(!found)
            {   var newArr = []; 

                for(var i = 0; i < this.addresses.length; i++)

                {if(this.addresses[i].address_id != address_id)
                   {newArr.push(this.addresses[i]);}            
                }

                this.addresses = newArr;       
            }   

        },    

        outputCustomerById:function(customer_id)
        {
           for(var i = 0; i < this.customers.length ;i++)
           {
               if(this.customers[i].customer_id === customer_id )
               {
                 console.log("Customer " + this.customers[i].customer_id +": " + this.customers[i].first_name + " " + this.customers[i].last_name + "("+ this.customers[i].email + ")\n");
                 var j = this.getAddressById(this.customers[i].address_id);  
                 console.log("Home Address : " +this.addresses[j].address + " " +this.addresses[j].city + ", " + this.addresses[j].province +". " + this.addresses[j].postal_code + "\n");
                 console.log("Joined: " + this.customers[i].add_date + "\n\n");
               }
           }
        },
        
        outputCustomersByStore:function(store_id)
        {
          for(var i = 0; i < this.customers.length ;i++)
          {
              if(this.customers[i].store_id === store_id )
              {
                var j= this.getStoreById(this.customers[i].store_id)
                console.log ("Customers in Store: " +  this.stores[j].name+"\n\n");
              }
              
              for(var i = 0; i < this.customers.length ;i++)
              {   
                  if(this.customers[i].store_id === store_id )
                  {  
                    console.log("Customer " + this.customers[i].customer_id +": " + this.customers[i].first_name + " " + this.customers[i].last_name + "("+ this.customers[i].email + ")\n");
                    var k= this.getAddressById(this.customers[i].address_id);  
                    console.log("Home Address : " +this.addresses[k].address + " " +this.addresses[k].city + ", " + this.addresses[k].province +". " + this.addresses[k].postal_code + "\n");
                    console.log("Joined: " + this.customers[i].add_date + "\n\n");
                  }
              }
          }
        },
       
        
        
        outputAllCustomers:function()
        {
            console.log("All Customers\n\n");
            for(var i = 0; i < this.customers.length ;i++)
            { 
              console.log("Customer " + this.customers[i].customer_id +": " + this.customers[i].first_name + " " + this.customers[i].last_name + "("+ this.customers[i].email + ")\n");
              var j = this.getAddressById(this.customers[i].address_id);  
              console.log("Home Address : " +this.addresses[j].address + " " +this.addresses[j].city + ", " + this.addresses[j].province +". " + this.addresses[j].postal_code + "\n");
              console.log("Joined: " + this.customers[i].add_date + "\n\n");
            }
         },
          
        outputAllAddresses:function()
        {
             console.log("All Addresses\n\n");
             for(var i = 0 ; i < this.addresses.length ; i++)
             {
                var j = this.getAddressById(this.addresses[i].address_id);
                console.log("Address " + this.addresses[j].address_id + ": " +this.addresses[j].address + " " +this.addresses[j].city + ", " + this.addresses[j].province +". " + this.addresses[j].postal_code + "\n\n");
             }
        },
        
        outputAllStores:function()
        {
             console.log("All Stores\n\n");
             for(var i = 0 ; i < this.stores.length ; i++)
             {
               var j = this.getAddressById(this.stores[i].address_id);
               console.log("Store " + this.stores[i].store_id + ": " + this.stores[i].name + "\n");
               console.log("Location: " + this.addresses[j].address + " " +this.addresses[j].city + ", " + this.addresses[j].province +". " + this.addresses[j].postal_code + "\n\n");
             }
        }
};


/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 




