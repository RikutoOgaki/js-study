/*
drill04 - 消費税の出力
#priceに金額を入力し、消費税込みの値段を#resultに出力すること
以下の条件の場合は、該当する出力を表示すること。

[出力時の表示] ※1000と入力した場合
1000円の税込み価格は1100円です。

[出力時の表示] ※文字を入力した場合
数値を入力してください -> errクラスを追加し赤字表示にする

[出力時の表示] ※マイナスの値を入力した場合
有効な数値を入力してください -> errクラスを追加し赤字表示にする

複数回テストを行い、エラーでない場合は文字が黒色になるように設定すること。

*/

const pr = document.getElementById('pr');
const re = document.getElementById('re');

console.log(pr, re);

pr.addEventListener('blur', () => {
    let num = parseInt(pr.value);
    let result = Math.sign(num)
    console.log(result);
    if (result === 1) {
        let calc = num * 0.1;
        re.textContent = num + calc
        re.style.color = '#000'
    }
    else if (result === -1) {
        re.textContent = '有効な数値を入力してください'
        re.style.color = 'tomato'
    }
    else if (result === 0 || -0) {
        re.textContent = '0では計算できません'
        re.style.color = 'tomato'
    }
    else {
        re.textContent = '数値を入力してください'
        re.style.color = 'tomato'
    }
})
