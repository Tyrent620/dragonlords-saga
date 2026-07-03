/* ============================================================================
   THYLEA — PLAYER COMPANION SITE  ·  CONTENT FILE
   ----------------------------------------------------------------------------
   THIS is the only file you edit. Change the values below, save, re-upload.
   The site (index.html) reads everything from here. Never edit index.html.

   GOLDEN RULE: players-only. Put NOTHING here they shouldn't know.
   Keep DM secrets (true rumors, twists, tactics) in your prep files instead.

   HOW TO ADD THINGS: each section is a list. Copy an existing { ... } block,
   paste it, edit the text. Commas between blocks. That's it.
   ============================================================================ */

const CAMPAIGN = {

  /* ---- Site header ---- */
  meta: {
    title: "Odyssey of the Dragonlords",
    subtitle: "The Saga of the Heroes of the Heartlands, as sung by Kyrah",
  },

  /* ---- Current Fame (0–20). Just change this number as it rises. ---- */
  fame: 1,

  /* ---- The four heroes. Add an image URL to `img` when you have portraits
         (upload art somewhere and paste the link); leave "" for a monogram. -- */
  heroes: [
    { name: "Baruk Stonefoot", title: "The Gifted One", img: "",
      epithet: "who would not believe the last dragon dead",
      text: "A rock gnome of the Mithral Mountains and — by his own estimation — the foremost living authority on dragons. He has staked his whole life on a truth the world calls a fool's dream: that the great dragons of the Dragonlords are not all dead, and that he will be the one to prove it." },
    { name: "Raxus", title: "The Demigod", img: "",
      epithet: "calf of the slaughtered steppes, and son of the Battle-God",
      text: "Born a minotaur calf on the wild Northern Steppes, orphaned by a dragon and sold south to the fighting pits of Mytros — where a strength not entirely mortal woke in him. The crowds named him Raxus and the bards began to sing. Newly freed of his chains, he walks the road with a fire in his blood that no one can explain." },
    { name: "Cyrus", title: "The Reaper", img: "",
      epithet: "keeper of the dead, who would not let go",
      text: "Raised among the shadow-touched keepers of the dead in the Necropolis at Telamok, sworn to the Fates. He broke the oldest law of his calling — he loved a soul he was meant to carry into the dark — and when she was lost between the living world and the dead, he swore he would find her, whatever it costs." },
    { name: "Phoebe Asteria", title: "The Exile", img: "",
      epithet: "moonlit and moth-crowned, keeper of the old songs",
      text: "A siren raised in the moonlit Silver Grove by the druid Thalia, keeper of the old rites and the older gods. Moth-haloed and strange, a quiet legend among those who still keep the old ways — and, since her mentor's passing, called by omens out of the grove and into a wider world." },
  ],

  /* ---- The Chronicle: Kyrah's growing epic. Newest entry FIRST.
         Add a new { ... } block at the top after each session. --------------- */
  chronicle: [
    { title: "The First Song",
      subtitle: "The Boar of the Heartlands",
      body: "The Twin Titans, brooding in their storm-wracked tower, loosed a corrupted beast upon the Heartlands — a great boar, sent to bleed the land and break the faith of mortals. And four came forward when braver names had failed, gathered to a black-timbered inn by a poet with laurel in her hair.\n\nInto the cold and the fog they went, north into the ruined hills, and found the beast at its grim feast in the mouth of a reeking cave. Spear and spell and fury they answered it with, until the monster that no hunter had felled lay broken at their feet.\n\nAnd when the moment came to give the great kill its due, these four did not bend the knee to the Lord of Storms as his Order demanded. They raised the pyre to another — and something in the wind seemed pleased. So their names begin to travel ahead of them now, east and south, toward the Temple of the Oracle, where the naiad Versi waits to speak of what is to come." },
    { title: "Invocation to the Muse",
      subtitle: "The Bard Takes Up the Tale",
      body: "Sing, Memory — of saviours, of heroes, of champions. Sing of the Odyssey of the Dragonlords, and tell their tale once again.\n\nOf Baruk, who would not believe the last dragon dead. Of Raxus, calf of the slaughtered steppes and son of the Battle-God. Of Cyrus, keeper of the dead, who would not let go. Of Phoebe, moonlit and moth-crowned, who carries the old songs still.\n\nO Muse of memories long past — sing of Thylea, of her hour of crisis and her hour of salvation. Sing, and tell this tale once more in our time." },
  ],

  /* ---- The Codex: what the party has LEARNED. Category options are free text;
         the site groups by whatever you write in `cat`. Add entries as they
         discover things. Keep it to what they actually know. ------------------ */
  codex: [
    { cat: "The Powers", name: "The Five Gods",
      text: "The gods the mortals of Thylea revere — though in these dark days their priests have grown scarce and their temples quiet, and the faithful wonder if the gods can still act at all." },
    { cat: "The Powers", name: "The Twin Titans",
      text: "Sydon, the Lord of Storms, and his sister-wife Lutheria, the Mistress of Madness. The old powers who ruled Thylea before mortals came — and who have never forgiven them for it." },
    { cat: "The Powers", name: "The Oath of Peace",
      text: "The ancient pact that shackled the Titans' wrath and protected the settlers for five hundred years. Its power is now waning — and with it, the horrors it once held back are stirring." },
    { cat: "People", name: "Kyrah the Poet",
      text: "A dark-haired poet in service to the Oracle, laurel in her hair, who summoned the heroes to the Sour Vintage. Sharp-tongued, quick to wonder, and eager to make their deeds into an epic. There is more to her than she lets on." },
    { cat: "People", name: "Versi, the Oracle",
      text: "A naiad seer of ancient power who brokered the Oath of Peace long ago, and who has now foreseen the Doom of Thylea — and the heroes who might avert it." },
    { cat: "Places", name: "The Sour Vintage",
      text: "A country inn at a crossroads east of Estoria, black-timbered and warm, where four strangers became a company." },
    { cat: "Places", name: "The Temple of the Oracle",
      text: "Home of the naiad Versi, hidden deep in a cleft of the earth where the ground itself breathes steam." },
    { cat: "Lore", name: "The Doom of Thylea",
      text: "The Oracle's dire prophecy: the death of the gods, the fall of Mytros, and the end of the mortal age — unless the heroes of her vision can turn the tide." },
  ],

  /* ---- The Journey: waypoints in order. status: "past", "current", "ahead".
         "ahead" entries show as unwritten/locked (no spoilers). --------------- */
  journey: [
    { name: "The Sour Vintage", status: "past",
      text: "Where a poet gathered four strangers and named them heroes." },
    { name: "The Boar's Cave", status: "past",
      text: "In the ravaged hills, the corrupted beast was slain and given to the gods." },
    { name: "The Road East", status: "current",
      text: "Bound for the Temple of the Oracle, and whatever fate she has seen." },
    { name: "The Temple of the Oracle", status: "ahead",
      text: "The road ahead is yet unwritten." },
    { name: "Estoria", status: "ahead",
      text: "The road ahead is yet unwritten." },
  ],

  /* ---- Rumors & Whispers: the tavern gossip the party has heard about ONE
         ANOTHER. Player-facing versions ONLY — never mark which are true. ----- */
  rumors: [
    { about: "Baruk", text: "He keeps humanoids in that 'preserved creatures' collection of his — not just beasts." },
    { about: "Baruk", text: "A monster in the caves near his village killed a string of townsfolk. Baruk swears he destroyed it, but no one ever saw a body, and it's never been seen since." },
    { about: "Baruk", text: "They say he summons succubi at night, on account of never once having landed a girlfriend." },
    { about: "Raxus", text: "At a very young age, he flew into a blind rage and slaughtered everyone in his home village." },
    { about: "Raxus", text: "That monstrous shape isn't natural — he was cursed into it by one of the gods." },
    { about: "Raxus", text: "The minotaur is a god's son. They say his father is Pythor, the God of Battle himself." },
    { about: "Cyrus", text: "He carries that black iron scythe because he believes every soul he reaps brings him one step closer to a woman he lost." },
    { about: "Cyrus", text: "The blade was forged from a shard of a Dragonlord's weapon, and can cut the very threads of fate." },
    { about: "Cyrus", text: "When he's alone, travelers swear you can hear him talking to someone standing beside him — though no one is ever there." },
    { about: "Phoebe", text: "She isn't a real siren — just look at her. That's why she can't fly." },
    { about: "Phoebe", text: "She's cursed. Everyone who gets close to her dies." },
    { about: "Phoebe", text: "She is the lost daughter of a murdered queen." },
  ],
};
