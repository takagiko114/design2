myNavigator.pushPage('listDetail.html')

myApp.controller('listDetailCtrl', function(){ 

      this.name = '初期名称';
      this.age = '0';
      // myNavigator.pushPageで送ったdataを受け取る 
      var data = myNavigator.topPage.data;
      // 正しく受け取ることができたら、値を取得
      if(data != undefined){
          this.name = data.name; 
          this.age = data.age; 
      }
		
	});
    
    var showTemplateDialog = function() {
    var dialog = document.getElementById('my-dialog');

      if (dialog) {
        dialog.show();
        } else {
        ons.createElement('dialog.html', { append: true })
        .then(function(dialog) {
            dialog.show();
         });
        }
    };

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};