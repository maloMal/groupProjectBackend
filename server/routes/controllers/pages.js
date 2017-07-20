


var pages = {
    home: function(req, res){
        res.sendFile(path.join(__dirname, '../../../public', 'index.html'));
    }
    
 
    
}

module.exports = pages;