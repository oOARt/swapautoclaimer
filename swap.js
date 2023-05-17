import fetch from "node-fetch";

// fetch(
//   "https://swaprum.finance/server/claim-free?address=0x42505cab4e1d6F12125c5fCb20A42cd34365E767"
// )
//   .then((res) => res.text())
//   .then((json) => {
//     if (json == { error: "wait 1 hour" }) {
//       console.log("wait 1 hour:))");
//     }
//     console.log(json);
//   });

// now we claiming and make timer ~ + 3 600 300
/*
const respone = await fetch(
  "https://swaprum.finance/server/claim-free?address=0x42505cab4e1d6F12125c5fCb20A42cd34365E767"
);
const body = await respone.text();
if (body == '{"error":"wait 1 hour"}') {
  console.log("lolka rabotat");
} else console.log(body);
*/ //////////////////

// getting 1 hour
// const freetoken = await fetch(
//   "https://swaprum.finance/server/free-token?address=0x42505cab4e1d6F12125c5fCb20A42cd34365E767"
// );
// const data = await freetoken.json();
// const lastClaimEpoch = data.freeInfo.lastClaimTime;
// console.log(lastClaimEpoch);
// console.log(new Date(lastClaimEpoch));
// const newvariablefuture = new Date(lastClaimEpoch + 3608000);
// console.log(newvariablefuture);
// console.log(newvariablefuture.getTime / 1.0);

// checking stats
// fetch(
//   "https://swaprum.finance/server/user?address=0x42505cab4e1d6F12125c5fCb20A42cd34365E767"
// )
//   .then((res) => res.json())
//   .then((json) => console.log(json));

//// {"success":true,"amount":"20833333333333333"}
const adresseslists = [
  "0x42505cab4e1d6f12125c5fcb20a42cd34365e767",
  "0x009Fc208e133785389b98686bB0fC26a1Ed7AAa2",
  "0xC5838287f99c477E87107d45Ce274ceF36e8aC0F",
];
adresseslists.forEach((element) => {
  function fetchData() {
    fetch(`https://swaprum.finance/server/claim-free?address=${element}`)
      .then((response) => response.text())
      .then((body) => {
        if (body == '{"error":"wait 1 hour"}') {
          console.log("oshibka");
          console.log(Date());
          console.log("--------------------");
        } else {
          console.log(body);
          console.log("plus babki");
          console.log(Date());
          console.log("--------------------");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // Call fetchData immediately
  fetchData();

  // Schedule fetchData to run every hour
  setInterval(fetchData, 3603000);
});
