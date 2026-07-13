// Placeholder storage module.
//
// The prototype in index.html currently talks to a browser-only `window.storage`
// API inline, which only exists inside the Claude artifact environment. This
// module will replace that with a real backend (Supabase) in a follow-up PR,
// exposing the same functions the app already uses:
//
//   sGet, sSet, sList, createGame, getGame, setGame, joinGame,
//   listPlayers, submitAnswer, countAnswers, updatePlayerScore
//
// Intentionally empty until then.
