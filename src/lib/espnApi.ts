export type ValidTeamIds = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "33" | "34"
export type TeamIds = ValidTeamIds | "-1" | "-2"

export const teams :Record<TeamIds, string> = {"-2":"TBD",
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
    "34":"Cowboys"}


export type SeasonTypes = 1 | 2 | 3 | 4
export type StrSeasonTypes = "1" | "2" | "3" | "4"

export const SeasonWeeks: Record<SeasonTypes, number[]> = {1:[1, 2, 3, 4],
    2:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    3:[1, 2, 3, 4, 5],
    4:[1]
} as const

export type EspnLeague = {id:string,
                   name:string,
                   slug:string,
                   season:EspnSeason
                   calendarStartDate:string,
                   calendarEndDate:string
                   calendar: {label:"Preseason" | "Regular Season" | "Postseason" | "Off Season",
                              value: StrSeasonTypes,
                              startDate:string,
                              endDate:string,
                              entries: {label:string,
                                        alternateLabel:string,
                                        detail:string,
                                        value: string,
                                        startDate:string,
                                        endDate:string
                              }[]
                   }[]
                   
}

export type EspnEvent = {competitions: {competitors:{homeAway: "home" | "away",
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
export type EspnSeason = {year:number,
    startDate:string,
    endDate:string,
    type: {id:string,
        type:SeasonTypes,
        name:string,
    },
    }
export type EspnWeek = {number: number,
    teamsOnBye?: {id:ValidTeamIds}[]}

export type EspnScoreboardResponse = {leagues: EspnLeague[],
                                      events: EspnEvent[],
                                      season: {type:SeasonTypes,
                                               year:number
                                      },
                                      week: EspnWeek
                                }

export type FullSeasonData<T extends SeasonTypes> = {[K in keyof typeof SeasonWeeks[T]]: EspnScoreboardResponse}


export const scoreURL = "http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"

export async function fetchScores(dates?:string,
    seasontype?:SeasonTypes,
    week?:number) {
const params = new URLSearchParams()

if (dates !== undefined){
    params.set("dates", dates)
}
if (seasontype !== undefined){
    params.set("seasontype", String(seasontype))
}
if (dates !== undefined){
    params.set("week", String(week))
}

const url = `${scoreURL}?${params}`
const resp = await fetch(url)
const respData = await resp.json()
validateEspnScoreboardResponse(respData)
return respData
}

function isObject(obj:any): asserts obj is Object {
    if (!(typeof obj === 'object' && !Array.isArray(obj) && obj !== null)){
        throw new Error("Not an object.");
        
    }
    return 
}

function isString(obj:any): asserts obj is string {
    if (typeof obj !== "string"){
        throw new Error("Not a string.");
        
    }
    return
}

function isArray(obj:any): asserts obj is any[] {
    if (!Array.isArray(obj)) {
        throw new Error("Not an array.")
    }
}


export function validateEspnSeason(obj:any): asserts obj is EspnSeason {
    
    return
}

export function validateEspnLeague(obj:any): asserts obj is EspnLeague {
    isObject(obj)
    isString(obj.id)
    isString(obj.slug)
    validateEspnSeason(obj.season)
    isString(obj.calendarStartDate)
    isString(obj.calendarEndDate)

    isArray(obj.calendar)
    obj.calendar.forEach((element:any) => {
        isObject(element);
        ["Preseason", "Regular Season", "Postseason", "Off Season"].includes(element.label);
        ["1", "2", "3", "4"].includes(element.value);
        isString(element.startDate)
        isString(element.endDate)
        isArray(element.entries)
        element.entries.forEach((subElement:any) => {
            isObject(subElement)
            isString(subElement.label)
            isString(subElement.alternateLabel)
            isString(subElement.detail)
            isString(subElement.value)
            isString(subElement.startDate)
            isString(subElement.endDate)
        });
    });

    return
}

export function validateEspnEvent(obj:any): asserts obj is EspnEvent {
    
    return
}

export function validateEspnWeek(obj:any): asserts obj is EspnWeek {
    
    return
}

export function validateEspnScoreboardResponse(obj:any): asserts obj is EspnScoreboardResponse {
    
    return
}

export function validateFullSeasonData(obj:any, T:SeasonTypes): asserts obj is FullSeasonData<typeof T> {

    return
}