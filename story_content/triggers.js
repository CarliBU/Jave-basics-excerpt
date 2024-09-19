function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HPuOBNeTPz":
        Script1();
        break;
      case "6W6HtspcB2k":
        Script2();
        break;
      case "5a9I3n4CKj1":
        Script3();
        break;
      case "5vMV7atAAuQ":
        Script4();
        break;
      case "6aBMHtnXiGm":
        Script5();
        break;
      case "6bEYZLsixwp":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5nmYp98MaB5');
const duration = 750;
const easing = 'ease-out';
const id = '5r8w3YuBEv1';
const pulseAmount = 0.1;
const delay = 6000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5nmYp98MaB5');
const duration = 750;
const easing = 'ease-out';
const id = '5r8w3YuBEv1';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6JTSzDhFwd6');
const duration = 750;
const easing = 'ease-out';
const id = '6WNDLHS5jjc';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6JTSzDhFwd6');
const duration = 750;
const easing = 'ease-out';
const id = '6rSFFOwWTXG';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6GQCnNF6KYR');
const duration = 750;
const easing = 'ease-out';
const id = '6qeyw5bOs2Z';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6GQCnNF6KYR');
const duration = 750;
const easing = 'ease-out';
const id = '5zYSciSEVSL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
