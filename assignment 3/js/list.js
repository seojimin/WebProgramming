// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];
var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];


window.onload =function()
{
      var listContainer = document.querySelector("#list");
      var fruitsString = "<ol>"; 
      for(var i=0; i < fruits.length; i++){ 
      // list items <li></li>
            fruitsString += "<li>" + fruits[i] + "</li>"
      }
      fruitsString += "</ol>"; // closing </ul>
      listContainer.innerHTML = fruitsString;
     
      
      var listContainer2 = document.querySelector("#list2");
      var directoryString = "<ul>"; 
      for(var i=0; i < directory.length; i++)
      { 
            directoryString  += "<li>"; 
            if (directory[i].type === "file")
                  {
                     directoryString += directory[i].name ;
                  }
            else
                  {
                      directoryString += directory[i].name+ "<ul>";
                     
                      for (var j=0; j<directory[i].files.length; j++)
                            {
                              directoryString += "<li>"+directory[i].files[j].name+ "</li>";
                            } 
                      directoryString += "</ul>"; 
                  }
            directoryString += "</li>"; 
      }
      directoryString += "</ul>"; 
      listContainer2.innerHTML += directoryString;
};


        
       
  
 






