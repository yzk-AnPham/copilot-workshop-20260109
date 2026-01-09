function validateIntegerInput(n) {
    if (n === null || n === undefined) {
        throw new TypeError('入力が必要です');
    }
    if (typeof n === 'string' && n.trim() !== '') {
        // 数字の文字列を許可して変換
        const parsed = Number(n);
        if (!Number.isFinite(parsed)) throw new TypeError('数値に変換できません');
        n = parsed;
    }
    if (typeof n !== 'number' || Number.isNaN(n) || !Number.isFinite(n)) {
        throw new TypeError('入力は有効な数値でなければなりません');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('入力は整数でなければなりません');
    }
    if (n < 1) {
        throw new RangeError('入力は1以上の整数でなければなりません');
    }
    return n;
}

function fizzBuzz(n) {
    const valid = validateIntegerInput(n);
    if (valid % 15 === 0) return 'FizzBuzz';
    if (valid % 3 === 0) return 'Fizz';
    if (valid % 5 === 0) return 'Buzz';
    return valid;
}

// Node.js で直接実行されたときの簡単な CLI ハンドリング
if (require.main === module) {
    try {
        // 環境変数やコマンドライン引数を参照して範囲をカスタム可能にする
        const maxArg = process.argv[2] || 20;
        const max = validateIntegerInput(maxArg);
        for (let i = 1; i <= max; i++) {
            console.log(fizzBuzz(i));
        }
    } catch (err) {
        // 意味のあるメッセージを標準エラーへ出力し、非ゼロで終了
        console.error('エラー:', err.message);
        process.exitCode = 2;
    }
}

module.exports = { fizzBuzz, validateIntegerInput };
