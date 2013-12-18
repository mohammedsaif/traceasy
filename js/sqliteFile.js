var db;
var shortName = 'teDB';
var version = '1.0';
var displayName = 'teDB';
var maxSize = 65535;
    
function errorHandler(transaction, error) 
{
   alert('Error: ' + error.message + ' code: ' + error.code);

}
    
function successCallBack() 
{
    //alert("DEBUGGING: success");

}
    
function nullHandler(){};  



function AddValueToDB() 
{

   if (!window.openDatabase) 
   {
      alert('Databases are not supported in this browser.');
      return;
   }

   db.transaction(function(transaction) 
   {
       transaction.executeSql('INSERT INTO SCORES(Name, Location, Mobile, Imei, Marks) VALUES (?,?,?,?,?)',[$('#name').val(), $('#txtLocation').val(), $('#mobile').val(), $('#imei').val(),$('#marks').val()],nullHandler,errorHandler);
   });
   return false;            
}
