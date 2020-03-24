var interval_id ;
var idx = 0;
var td;
var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

//スタートボタンを押すとルーレットが回転する

window.onload = function(){
    var start = document.getElementById('start');
    start.addEventListener('click',start_button,false);

    var stop = document.getElementById('stop');
    stop.addEventListener('click',stop_button,false);

    var reset = document.getElementById('reset');
    reset.addEventListener('click',reset_button,false);
    
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('reset').disabled = true;
}

function start_button(){

    interval_id = setInterval(roulette_start, 50);
    
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('reset').disabled = false;
    
}
function roulette_start(){
    
    var td_list = document.getElementsByTagName('td'); 
    for (var i = 0; i < td_list.length; i++) {
        td_list[i].classList.remove("spin");  //全てのtd要素からspinのクラスを削除
    }
    
    idx = Math.floor(Math.random() * list.length ); //ランダムな数字を取得
    td = document.getElementById('td' + list[idx]); //数字を取得
    td.classList.add("spin");  //tdにclassのspinを追加

}
//ルーレット停止
function stop_button(){
    clearInterval(interval_id);
    td = document.getElementById('td' + list[idx]); //数字を取得
    td.classList.remove("spin"); //spinのクラスを消す
    td.classList.add("stop");  //stopのクラスを追加
    
    list.splice(idx,1); //一度停止した部分を１つづつ除外する
    
    if(list.length >0){    //配列の要素数が０じゃない限りスタートボタンを押せる
        document.getElementById('start').disabled = false;
    }
    
    document.getElementById('stop').disabled = true;
    document.getElementById('reset').disabled = false;
}
 

//リセットボタンを押すと初期表示の状態に戻る
function reset_button(){
    //止める
    clearInterval(interval_id);
    
    //背景を戻す
    var td_list = document.getElementsByTagName('td'); 
    
    for (var i = 0; i < td_list.length; i++) {
        td_list[i].classList.remove("spin");    
        td_list[i].classList.remove("stop");
    }
    
    //listに１、２、３、４...を入れる 配列を元に戻す
    list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('reset').disabled = true;
    
}