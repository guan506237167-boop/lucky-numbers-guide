function getToolRoot(target){return target?.closest('.lucky-tool-card, .hero-tool-card, .container') || document;}
function reduceDigit(n){n=Math.abs(Number(n)||0); while(n>9)n=String(n).split('').reduce((a,b)=>a+Number(b),0); return n||1;}
function calcLucky(event){
  const root=getToolRoot(event?.currentTarget);
  const date=root.querySelector('#birth').value||'1990-08-08';
  const fav=Number(root.querySelector('#fav').value||8);
  const digits=String(date).replace(/\D/g,'').split('').map(Number);
  const birthAnchor=reduceDigit(digits.reduce((a,b)=>a+b,0));
  const dayAnchor=reduceDigit(String(date).slice(-2));
  const cultural=[6,8,9];
  const set=[birthAnchor,dayAnchor,fav,...cultural].filter((v,i,a)=>Number.isFinite(v)&&v>=0&&v<=9&&a.indexOf(v)===i).slice(0,5);
  const notes=[];
  if(set.includes(8))notes.push('8 is commonly linked with prosperity symbolism in Chinese number culture.');
  if(set.includes(6))notes.push('6 is often read as smooth progress or things going well.');
  if(set.includes(9))notes.push('9 can suggest long-lasting meaning or completion.');
  root.querySelector('#result').innerHTML=`<h3>${set.join(' / ')}</h3><p><strong>Birth anchor:</strong> ${birthAnchor}. <strong>Day anchor:</strong> ${dayAnchor}. <strong>Favorite digit:</strong> ${fav}.</p><p>${notes.join(' ') || 'Use the result as a small personal reference set.'}</p><p>This is cultural symbolism for names, gifts, dates, and personal rituals, not a guarantee of luck.</p>`;
}
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('[data-calc]'); if(b)b.addEventListener('click',calcLucky);});

