export const teams = {"-2":"TBD",
                      "-1":"TBD",
                      "1":"Falcons",
                      "2":"Bills",
                      "3":"Bears",
                      "4":"Bengals",
                      "5":"Browns",
                      "6":"Cowboys",
                      "7":"Broncos",
                      "8":"Lions",
                      "9":"Packers",
                      "10":"Titans",
                      "11":"Colts",
                      "12":"Chiefs",
                      "13":"Raiders",
                      "14":"Rams",
                      "15":"Dolphins",
                      "16":"Vikings",
                      "17":"Patriots",
                      "18":"Saints",
                      "19":"Giants",
                      "20":"Jets",
                      "21":"Eagles",
                      "22":"Cardinals",
                      "23":"Steelers",
                      "24":"Chargers",
                      "25":"49ers",
                      "26":"Seahawks",
                      "27":"Buccaneers",
                      "28":"Commanders",
                      "29":"Panthers",
                      "30":"Jaguars",
                      "33":"Ravens",
                      "34":"Cowboys"} as const

export type TeamIds = keyof typeof teams
export type SeasonTypes = 1 | 2 | 3 | 4

type EspnEvent = {competitions: {competitors:{homeAway: "home" | "away",
                                           id:TeamIds,
                                           score:string,
                                           winner:boolean}[]
                            }[],
                  date:string,
                  id:string,
                  links: {href:string,
                          text:"Gamecast" | "Box Score" | "Play-by-Play" | "Recap"
                }[]
                  name:string,
                  season: {year: number,
                           type: SeasonTypes
                  },
                  situation?: {probability: {tiePercentage:number,
                                             homeWinPercentage:number,
                                             awayWinPercentage:number}}
                  status: {clock:number,
                           displayClock:string,
                           period:number,
                           type:{state: "pre" | "in" | "post",
                                 completed:boolean,
                                 description:string,
                                 detail:string,
                                 shortDetail:string
                                 }},
                   odds?: {details:string}[]
                  
             }
type EspnSeason = {type: SeasonTypes,
    year: number}
type EspnWeek = {number: number,
    teamsOnBye?: {id:TeamIds}[]}

export type EspnScoreboardResponse = {events: EspnEvent[],
                           season: EspnSeason,
                           week: EspnWeek
                                }



const scoreURL = "http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"

export async function fetchScores(dates:string,
    seasontype:SeasonTypes,
    week:number) {
const params = new URLSearchParams({"dates":dates,
                 "seasontype":String(seasontype),
                 "week":String(week)
                 })
const url = `${scoreURL}?${params}`
const resp = await fetch(url)
const respData = await resp.json()
return respData
}