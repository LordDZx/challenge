document.addEventListener('DOMContentLoaded', () => {
    const showRound1Btn = document.getElementById('show-round1');
    const showRound2Btn = document.getElementById('show-round2');
    const showRound3Btn = document.getElementById('show-round3');
    const showRound4Btn = document.getElementById('show-round4');
    const showFinalBtn = document.getElementById('show-final');
    const backToRoundBtn = document.getElementById('back-to-round');
    
    const round1 = document.getElementById('round1');
    const round2 = document.getElementById('round2');
    const round3 = document.getElementById('round3');
    const round4 = document.getElementById('round4');
    const final = document.getElementById('final');
    
    showRound1Btn.addEventListener('click', () => {
        round1.style.display = 'block';
        round2.style.display = 'none';
        round3.style.display = 'none';
        round4.style.display = 'none';
        final.style.display = 'none';
        backToRoundBtn.style.display = 'none';
        showRound2Btn.style.display = 'inline-block';
    });
    
    showRound2Btn.addEventListener('click', () => {
        round1.style.display = 'none';
        round2.style.display = 'block';
        round3.style.display = 'none';
        round4.style.display = 'none';
        final.style.display = 'none';
        backToRoundBtn.style.display = 'inline-block';
        showRound3Btn.style.display = 'inline-block';
    });
    
    showRound3Btn.addEventListener('click', () => {
        round1.style.display = 'none';
        round2.style.display = 'none';
        round3.style.display = 'block';
        round4.style.display = 'none';
        final.style.display = 'none';
        backToRoundBtn.style.display = 'inline-block';
        showRound4Btn.style.display = 'inline-block';
    });
    
    showRound4Btn.addEventListener('click', () => {
        round1.style.display = 'none';
        round2.style.display = 'none';
        round3.style.display = 'none';
        round4.style.display = 'block';
        final.style.display = 'none';
        backToRoundBtn.style.display = 'inline-block';
        showFinalBtn.style.display = 'inline-block';
    });
    
    showFinalBtn.addEventListener('click', () => {
        round1.style.display = 'none';
        round2.style.display = 'none';
        round3.style.display = 'none';
        round4.style.display = 'none';
        final.style.display = 'block';
        backToRoundBtn.style.display = 'inline-block';
    });
    
    backToRoundBtn.addEventListener('click', () => {
        final.style.display = 'none';
        backToRoundBtn.style.display = 'none';
        showFinalBtn.style.display = 'none';
        showRound4Btn.style.display = 'none';
        showRound3Btn.style.display = 'none';
        showRound2Btn.style.display = 'none';
        round1.style.display = 'block';
    });
});
