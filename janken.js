const readline = require('readline');

const choices = ['グー', 'チョキ', 'パー'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(user, computer) {
    if (user === computer) return '引き分け';
    if (
        (user === 'グー' && computer === 'チョキ') ||
        (user === 'チョキ' && computer === 'パー') ||
        (user === 'パー' && computer === 'グー')
    ) return 'あなたの勝ち';
    return 'あなたの負け';
}

function isValidChoice(input) {
    return choices.includes(input);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask() {
    rl.question(`選んでください (${choices.join('/')}) : `, (answer) => {
        const userChoice = answer.trim();
        if (!isValidChoice(userChoice)) {
            console.log('無効な入力です。もう一度入力してください。');
            return ask();
        }

        const computerChoice = getComputerChoice();
        console.log(`あなた: ${userChoice}  コンピューター: ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice));

        rl.question('もう一回？ (y/n): ', (again) => {
            if (again.trim().toLowerCase() === 'y') return ask();
            console.log('終了します。');
            rl.close();
        });
    });
}

// デモ実行
if (require.main === module) {
    console.log('じゃんけんゲームへようこそ。');
    ask();
}
