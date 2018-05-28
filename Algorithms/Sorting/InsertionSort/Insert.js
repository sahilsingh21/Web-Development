function insert() {
    var Num=document.getElementById("num").value;
    var Arr;
    for(var i=0; i<Num;i++) {
        Arr[i] = document.getElementById("insert").value;
    }
    var ins = insertionSort2(Num, Arr);
    document.getElementById("answer").value = ins;

    for(var j=1;j<n;j++)
	 {
	     var key = arr[j];
	     var i = j-1;
	     while(i >= 0 && arr[i] > key){
	         arr[i+1] = arr[i];
	         i=i-1;
	     }
	     arr[i+1] = key;
        for(var k=0;k<n;k++){
            cout<<arr[k]<<" ";
        }
        cout<<endl;
	 }

}
