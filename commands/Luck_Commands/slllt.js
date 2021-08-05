const { MessageEmbed } = require("discord.js");
const DB = require("djs-economy");
const config = require("../../config.json");
const random = require('random-number-csprng');
const db = require("../models/db.js");

module.exports = {
  name: "slots",
  aliases: ["sl","s"],
  //cooldown: 3,
  async execute(message, args, client) {
    let user = message.author.id;
    let money = 0;
    let moneydb = await DB.GetCash(message.author.id);
    let rand = await random(1,1000)/10;
    let all = false;
    let max = 50000;
    const slots = ["🍉","🍇","🍌","🍒","🍎"]


    
  
let rslots =[]; 
let logging = 0;
if (rand <= 30) { //1x 20%
  rslots.push(slots[0]);
  rslots.push(slots[0]);
  rslots.push(slots[0]);
  logging = 0;
} else if (rand <= 45) { //2x 20%
  rslots.push(slots[1]);
  rslots.push(slots[1]);
  rslots.push(slots[1]);
  logging = 1;
} else if (rand <= 45.5) { //3x 5%
  rslots.push(slots[2]);
  rslots.push(slots[2]);
  rslots.push(slots[2]);
  logging = 2;
} else if (rand <= 48.5) { //4x 2.5%
  rslots.push(slots[3]);
  rslots.push(slots[3]);
  rslots.push(slots[3]);
  logging = 3;
}else {
  logging = -1;
  var slot1 = Math.floor(Math.random() * (slots.length - 1));
  var slot2 = Math.floor(Math.random() * (slots.length - 1));
  var slot3 = Math.floor(Math.random() * (slots.length - 1));
  if (slot3 == slot1)
    slot2 = (slot1 + Math.ceil(Math.random() * (slots.length - 2))) % (slots.length - 1);
  if (slot2 == slots.length - 2)
    slot2++;
  rslots.push(slots[slot1]);
  rslots.push(slots[slot2]);
  rslots.push(slots[slot3]);
}
    let mrhama = db.findOne({
  Username:message.author.username,
  User:message.author.id
  
}, (err,sl) => {
  if(err) console.log(err)
  if(!sl){
    db.create({
      Username:message.author.username,
      User:message.author.id,
      Guild:message.guild.id,
      Guildname:message.guild.name,
      Coins: 100
    })
  } else{

    if(args[0] === "all"){
      all = true
    }else if(parseInt(args[0])){
      money = parseInt(args[0])
    } 
    

      
          if(all && sl.Coins > 50000  ){
      money = 50000
    }
      if(all && sl.Coins < max)
      money = sl;
      if(all && sl.Coins== 0) return message.channel.send("**You Dont Have Money**")
    
    if(!all&& isNaN(args[0]) || parseInt(args[0]) > 50000) return message.channel.send("You Can't More Than 50,000")
    
    if(sl.Coins===0&&!all){
      message.channel.send("**You Dont Have Money**")
      return;
    }
    

    let moneymore = new MessageEmbed()
      .setColor("#ffff33")
      .setDescription(`❌ You are betting more than you have`);
    let moneyhelp = new MessageEmbed()
      .setColor("#ffff33")
      .setDescription(`❌ Specify an amount`);
  //  if (!all&&!money) return message.channel.send(moneyhelp);
  //  if (!all&&isNaN(args[0]) || parseInt(args[0]) > moneydb.cash)
   //   return message.channel.send(moneymore);

    if (!all&&isNaN(args[0]) || parseInt(args[0])  > 50000) {
      message.reply("You can't use more than 50,000");
    } else {
      
      const slotemoji = "<a:Slrandom:857986182159925249>";
    const customemoji =
      "<a:Slrandom:857986182159925249>" +
      config.emojiname +
      ":" +
      config.emojiid +
      ">";
    if (config.haveEmoji === "1") slotemoji = customemoji;


          
      
    
      
      
      
      
           let  mrhama = args[0]
         let monty = (args[0] *= 2);
    //  let  mrhama = args[0]
     
            const play =
      "\n**`__SLOTS__`**\n  " + slotemoji + "  " + slotemoji + "  " + slotemoji + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|       |\`\`\nYou testing chance \`\`\`Zooye machine  \`\`\``;

  
      const $1 =
        "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + slotemoji + "  " + slotemoji + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|        |\`\`\nYou testing chance \`\`\`Zooye machine  \`\`\``;
      
      const $2 =
      "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + rslots[1] + "  " + slotemoji + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|       |\`\`\nYou testing chance \`\`\`Zooye machine  \`\`\``;
        
     let $3 = "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + rslots[1] + "  " + rslots[2] + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|        |\`\`\nYou testing chance \`\`\`Zooye machine  \`\`\``;

      let spinner;
      if(rand <= 48.5 ){
        
      message.channel.send(play).then(msg => {
        
       sl.Coins = sl.Coins + money
      sl.save()

//DB.Addash(message.author.id,money)
      let win = "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + rslots[1] + "  " + rslots[2] + ` **${message.author.username}** bet <:Para:866091625922035762> ${money}\n\`\`|          |\`\`\n  was added to your balance  **<:Para:866091625922035762> ${money} x2**\`\`\`You win...  🟢 \`\`\``;
      setTimeout(() => {
        msg.edit($1)
      setTimeout(() => {
        msg.edit($2);
      setTimeout(() => {
        msg.edit($3);
        setTimeout(() => {
      msg.edit(win);
        
        },100)
        },700)
        },1200)
        },1003)
        })
}else if(rand > 48.5){
  
 message.channel.send(play).then(msg => {
sl.Coins = sl.Coins - money
sl.save()
   //DB.SubCash(message.author.id,money)
let lost = "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + rslots[1] + "  " + rslots[2] + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|         |\`\`\n\and won nothing...\`\`\`\You lost... 🔴  \`\`\``;
setTimeout(function()  {
        msg.edit($1);
  
      setTimeout(function()  {
        msg.edit($2);
        
      setTimeout(function()  {
        msg.edit($3);
        setTimeout(function()  {
      msg.edit(lost);
        
      },100)
      },700)
        },1200)
  },1000)
  })
      }
    }
    }
  });
                }}

/*
    const slotemoji = "<a:Slrandom:857986182159925249>";
    const customemoji =
      "<a:Slrandom:857986182159925249>" +
      config.emojiname +
      ":" +
      config.emojiid +
      ">";
    if (config.haveEmoji === "1") slotemoji = customemoji;


    let moneymore = new MessageEmbed()
      .setColor("#ffff33")
      .setDescription(`❌ You are betting more than you have`);
    let moneyhelp = new MessageEmbed()
      .setColor("#ffff33")
      .setDescription(`❌ Specify an amount`);
    if (!money) return message.channel.send(moneyhelp);
    if (isNaN(args[0]) || parseInt(args[0]) > moneydb.cash)
      return message.channel.send(moneymore);

    if (isNaN(args[0]) || parseInt(args[0]) > 50001) {
      message.reply("You can't use more than 50,000");
    } else {
      //let items = ["💵", "💍", "💯"];
      let items  = ["🍆", "🍌",  "🍉"];

   //   var chance = Math.random() * 100;
       
      let random = items[Math.floor(Math.random () * 0 < 100)]
      if(random)
         //0if (chance > 80) { 
     message.channel.send(random)
      let $ = items[Math.floor(items.length * Math.random())];
      let $$ = items[Math.floor(items.length * Math.random())];
      let $$$ = items[Math.floor(items.length * Math.random()   )];


        let hamaem0 = (args[0] *= 1);
   //   const play = new MessageEmbed()
        /// .setTitle("Slot Machine")
  //   .setTitle(
       //     `**___SLOTS___ **\n**${message.author.username} **\n bet <:Para:866091625922035762> __${hamaem0}__\n 
//`
        //  )
    //    .setThumbnail(
    //      "https://media.discordapp.net/attachments/849448966444810273/862417769089990706/image0.gif"
     //   )
     //   .setDescription(
            const play =
      "\n**`__SLOTS__`**\n `machine` " + slotemoji + "  " + slotemoji + "  " + slotemoji + ` \n**bet |** <:Para:866091625922035762> __${hamaem0}__\n**${message.author.username}**\n ||<a:swranawa:855359043816128562>   || __Zooye__`;
        
     //   .setColor("#ffff33")
     //   .setFooter("are you lucky bitch?");

        let hamaem9 = (args[0] *= 1);
  //    const $1 = new MessageEmbed()
   //   .setTitle(
     //       `**___SLOTS___ **\n**${message.author.username} **\n bet <:Para:866091625922035762> __${hamaem9}__\n 
//`
    //      )
        // .setTitle("Slot Machine")
     //   .setDescription(" **___Machine___ **" + $ + "  " + slotemoji + "  " + slotemoji + " ")
   //     .$1("#ffff33")
      const $1 =
      "\n**`__SLOTS__`**\n `machine` " + slotemoji + "  " + slotemoji + "  " + slotemoji + `\n **bet |** <:Para:866091625922035762> __${hamaem9}__\n**${message.author.username}**\n ||<a:swranawa:855359043816128562>   || __Zooye__`;
        
  //      .setThumbnail(
    //      "https://media.discordapp.net/attachments/849448966444810273/862417769089990706/image0.gif"
    //    )
    //    .setFooter("are you lucky bitch?");

        let hamaem8 = (args[0] *= 1);
      //const $2 = new MessageEmbed()
      // .setTitle(
         //   `**___SLOTS___ **\n**${message.author.username} **\n bet <:Para:866091625922035762> __${hamaem8}__\n 
//`
     //     )
        //   .setTitle("Slot Machine")
      //  .setDescription(" **___Machine___ **" + $ + "  " + $$ + "  " + slotemoji + " ")
    //    .setColor("#ffff33")
      const $2 =
      "\n**`__SLOTS__`**\n `machine` " + $ + "  " + $$ + "  " + slotemoji + `\n **bet |** <:Para:866091625922035762> __${hamaem0}__\n**${message.author.username}**\n ||<a:swranawa:855359043816128562>   || __Zooye__`;
        
      
   //     .setThumbnail(
   //       "https://media.discordapp.net/attachments/849448966444810273/862417769089990706/image0.gif"
    //    )
     //   .setFooter("are you lucky bitch?");

        let hamaem7 = (args[0] *= 1);
   //   const $3 = new MessageEmbed()
 // .setTitle(
  //          `**___SLOTS___ **\n**${message.author.username} **\n bet <:Para:866091625922035762> __${hamaem7}__\n 
            
//`
    //      )
        //   .setTitle("Slot Machine")
   //     .setDescription(" **___Machine___ ** " + $ + "  " + $$ + "  " + $$$ + " ")
   //     .setColor("#ffff33")
const $3 =
      "\n**`__SLOTS__`**\n `machine`" + $ + "  " + $$ + "  " + $$$ + `\n **bet |** <:Para:866091625922035762> __${hamaem0}__\n**${message.author.username}**\n ||<a:swranawa:855359043816128562>   || __Zooye__`;
        
    //    .setThumbnail(
    //      "https://media.discordapp.net/attachments/849448966444810273/862417769089990706/image0.gif"
    //    )
  //      .setFooter("are you lucky bitch?");
//
      let spinner;
      spinner = await message.channel.send(play);
      setTimeout(() => {
        spinner.edit($1);
      }, 600);
      setTimeout(() => {
        spinner.edit($2);
      }, 1200);
      setTimeout(() => {
        spinner.edit($3);
      }, 1800);

      // You can add/remove user balance in respective result (if using some currency system)

      if ($$ !== $ && $$ !== $$$) {
        let text2 = args[0]
        //    let text2 = `**${user.user.username} **CoinFlip ** ${money} <a:emoji_12:854073741520666644> ** Choice  `;
       let hamaem4 = args[0];
      
        
        
        

            setTimeout(() => {
     spinner.edit(
                 
                 
    //        `**___SLOTS___ **\n**${message.author.username }** ** " + $$ + " | " + $ + " | " + $$$ + " | \n**You Win**  __${hamaem4}__\n 
            
//`(
         //   `**___SLOTS___ **\n**${message.author.username} **\n bet <:Para:866091625922035762> __${hamaem8}__\n 
//`
       //   )
         "\n**`__SLOTS__`**\n `machine` " + $ + " " + $$ + "  " + $$$ + `\n **bet |** <:Para:866091625922035762> __${hamaem4}__\n**${message.author.username}** You lost\n | <a:zarb:855359934547230740> | __Zooye__`
      )    

    
            }, 3000);
     

        //   "https://media.discordapp.net/attachments/763285123964731422/862219599402631168/image0.png"
        //  );
  //      setTimeout(() => {
     //     spinner.edit(hama1);
   //     }, 2500);
        DB.SubCash(message.author.id, text2);
        const te = []
  hama(te,"agare 40",60)
 hama(te,"Agare60",60)
var R = Math.floor(Matjh.random() * te.length)
message.channel.send(te[R])
    
      } else if ($ === $$ && $ === $$$) {
          let hamaem5 = args[0] *= 1;
        let hamaem2 = args[0] *= 2;
    //    const hama2 = new MessageEmbed()
    //      .setDescription(
 //          "**||___Machine___|| ** " + $$ + " | " + $ + " | " + $$$ + " | \n**You Win**  "
      //    )
    //      .setTitle(
      //      `**___SLOTS___ **\n**${message.author.username} |** bet <:Para:866091625922035762> __${hamaem5}__\n <:Para:866091625922035762> __${hamaem2}__ Amounts Win
//`
    //      )
        //  .setFooter("Zooye Slots Game")
   //       .setThumbnail(
   //         "https://media.discordapp.net/attachments/763285123964731422/862224195035463690/image1.png"
    //      )
  //        .setColor("#0BDA51");
        
         setTimeout(() => {
          spinner.edit(
                 
                 
    //        `**___SLOTS___ **\n**${message.author.username }** ** " + $$ + " | " + $ + " | " + $$$ + " | \n**You Win**  __${hamaem4}__\n 
            
//`(
         //   `**___SLOTS___ **\n**${message.author.username} **\n bet <:Para:866091625922035762> __${hamaem8}__\n 
//`
       //   )
         "\n**`__SLOTS__`**\n `machine` " + $$ + " " + $ + "  " + $$$ + `\n **bet |** <:Para:866091625922035762> __${hamaem5}__\n**${message.author.username}** You win <:Para:866091625922035762> __${hamaem2}__\n | <a:kass:855358949841436692> | __Zooye__`
      )    

      
      //  setTimeout(() => {
 //         spinner.edit(hama2);
        }, 2500);
      //      }, 2500);
        
      
         } else {
          let hamaem6 = (args[0] *= 1);
        let hamaem3 = (args[0] *= 1);
    //    const hama3 = new MessageEmbed()
      
    //      .setDescription(
       //     "**||___Machine___|| **" + $ + " | " + $$ + " |" + $$$ + "| \n**You Win**The amounts you beting are resend"
  //   )
        
   
 //       .setTitle(
  //          `**___SLOTS___ **\n**${message.author.username} |** bet <:Para:866091625922035762> __${hamaem6}__\n<:Para:866091625922035762> __${hamaem3}__ Amounts Win
//`
     //     )
       //   .setFooter("Zooye Slots Game")
//.setColor("#1E90FF")
               setTimeout(() => {
   //       spinner.edit(hama3);
      //  }, 2500);
  spinner.edit(
                 
                 
    //        `**___SLOTS___ **\n**${message.author.username }** ** " + $$ + " | " + $ + " | " + $$$ + " | \n**You Win**  __${hamaem4}__\n 
            
//`(
         //   `**___SLOTS___ **\n**${message.author.username} **\n bet <:Para:866091625922035762> __${hamaem8}__\n 
//`
       //   )
         "\n**`__SLOTS__`**\n `machine` " + $ + " " + $$ + "  " + $$$ +`\n||game||  **bet |** <:Para:866091625922035762> __${hamaem6}__\n**${message.author.username}** You win <:Para:866091625922035762> __${hamaem3}__\n | <a:swranawa:855359043816128562> | __Zooye__`
      )   
     //   setTimeout(() => {
   //       spinner.edit(hama3);
       }, 2500);
       
         
      }
    }
    }
    
  }
};*/