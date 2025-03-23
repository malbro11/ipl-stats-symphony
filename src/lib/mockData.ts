
// Team Data
export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  matches: number;
  won: number;
  lost: number;
  nrr: number;
  points: number;
  rank: number;
}

export const teams: Team[] = [
  {
    id: "csk",
    name: "Chennai Super Kings",
    shortName: "CSK",
    logo: "/teams/csk.png",
    primaryColor: "#F7D133",
    matches: 0,
    won: 0,
    lost: 0,
    nrr: 0,
    points: 0,
    rank: 3
  },
  {
    id: "mi",
    name: "Mumbai Indians",
    shortName: "MI",
    logo: "/teams/mi.png",
    primaryColor: "#0078BC",
    matches: 0,
    won: 0,
    lost: 0,
    nrr: 0,
    points: 0,
    rank: 4
  },
  {
    id: "rcb",
    name: "Royal Challengers Bangalore",
    shortName: "RCB",
    logo: "/teams/rcb.png",
    primaryColor: "#D71920",
    matches: 1,
    won: 1,
    lost: 0,
    nrr: +2.137,
    points: 2,
    rank: 2
  },
  {
    id: "gt",
    name: "Gujarat Titans",
    shortName: "GT",
    logo: "/teams/gt.png",
    primaryColor: "#1A1F2C",
    matches: 0,
    won: 0,
    lost: 0,
    nrr: 0,
    points: 0,
    rank: 5
  },
  {
    id: "lsg",
    name: "Lucknow Super Giants",
    shortName: "LSG",
    logo: "/teams/lsg.png",
    primaryColor: "#4BA9E1",
    matches: 0,
    won: 0,
    lost: 0,
    nrr: 0,
    points: 0,
    rank: 6
  },
  {
    id: "dc",
    name: "Delhi Capitals",
    shortName: "DC",
    logo: "/teams/dc.png",
    primaryColor: "#0078BC",
    matches: 0,
    won: 0,
    lost: 0,
    nrr: 0,
    points: 0,
    rank: 7
  },
  {
    id: "kkr",
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    logo: "/teams/kkr.png",
    primaryColor: "#3A225D",
    matches: 1,
    won: 0,
    lost: 1,
    nrr: -2.137,
    points: 0,
    rank: 9
  },
  {
    id: "rr",
    name: "Rajasthan Royals",
    shortName: "RR",
    logo: "/teams/rr.png",
    primaryColor: "#FF69B4",
    matches: 1,
    won: 0,
    lost: 1,
    nrr: -2.200,
    points: 0,
    rank: 10
  },
  {
    id: "pbks",
    name: "Punjab Kings",
    shortName: "PBKS",
    logo: "/teams/pbks.png",
    primaryColor: "#D71920",
    matches: 0,
    won: 0,
    lost: 0,
    nrr: 0,
    points: 0,
    rank: 8
  },
  {
    id: "srh",
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    logo: "/teams/srh.png",
    primaryColor: "#F7A721",
    matches: 1,
    won: 1,
    lost: 0,
    nrr: +2.200,
    points: 2,
    rank: 1
  }
];

// Player Data
export interface Player {
  id: string;
  name: string;
  teamId: string;
  image: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicket-keeper";
  nationality: string;
  matches: number;
  runs?: number;
  strikeRate?: number;
  average?: number;
  wickets?: number;
  economy?: number;
  oversBowled?: number;
}

export const players: Player[] = [
  {
    "id": "kohli",
    "name": "Virat Kohli",
    "teamId": "rcb",
    "image": "/players/kohli.png",
    "role": "Batsman",
    "nationality": "India",
    "matches": 15,
    "runs": 741,
    "average": 61.75,
    "strikeRate": 154.69
  },
  {
    "id": "gaikwad",
    "name": "Ruturaj Gaikwad",
    "teamId": "csk",
    "image": "/players/gaikwad.png",
    "role": "Batsman",
    "nationality": "India",
    "matches": 14,
    "runs": 583,
    "average": 53.00,
    "strikeRate": 141.16
  },
  {
    "id": "parag",
    "name": "Riyan Parag",
    "teamId": "rr",
    "image": "/players/parag.png",
    "role": "Batsman",
    "nationality": "India",
    "matches": 16,
    "runs": 573,
    "average": 52.09,
    "strikeRate": 149.21,
  },
  {
    "id": "head",
    "name": "Travis Head",
    "teamId": "srh",
    "image": "/players/head.png",
    "role": "Batsman",
    "nationality": "Australia",
    "matches": 15,
    "runs": 567,
    "average": 40.50,
    "strikeRate": 191.55,
  },
  {
    "id": "samson",
    "name": "Sanju Samson",
    "teamId": "rr",
    "image": "/players/samson.png",
    "role": "Batsman",
    "nationality": "India",
    "matches": 16,
    "runs": 531,
    "average": 48.27,
    "strikeRate": 153.46
  },
  {
    "id": "harshal",
    "name": "Harshal Patel",
    "teamId": "pbks",
    "image": "/players/harshal.png",
    "role": "Bowler",
    "nationality": "India",
    "matches": 14,
    "wickets": 24,
    "economy": 9.73,
    "oversBowled": 49.0
  },
  {
    "id": "varun",
    "name": "Varun Chakravarthy",
    "teamId": "kkr",
    "image": "/players/varun.png",
    "role": "Bowler",
    "nationality": "India",
    "matches": 15,
    "wickets": 21,
    "economy": 8.04,
    "oversBowled": 50.0
  },
  {
    "id": "bumrah",
    "name": "Jasprit Bumrah",
    "teamId": "mi",
    "image": "/players/bumrah.png",
    "role": "Bowler",
    "nationality": "India",
    "matches": 13,
    "wickets": 20,
    "economy": 6.48,
    "oversBowled": 51.5
  },
  {
    "id": "russell",
    "name": "Andre Russell",
    "teamId": "kkr",
    "image": "/players/russell.png",
    "role": "All-rounder",
    "nationality": "West Indies",
    "matches": 15,
    "wickets": 19,
    "economy": 10.05,
    "oversBowled": 29.2,
    "runs": 222,
    "average": 31.71,
    "strikeRate": 185
  },
  {
    "id": "harshit",
    "name": "Harshit Rana",
    "teamId": "kkr",
    "image": "/players/harshit.png",
    "role": "Bowler",
    "nationality": "India",
    "matches": 13,
    "wickets": 19,
    "economy": 9.08,
    "oversBowled": 42.1
  },
  {
    "id": "ellis",
    "name": "Nathan Ellis",
    "teamId": "pbks",
    "image": "/players/ellis.png",
    "role": "Bowler",
    "nationality": "Australia",
    "matches": 1,
    "wickets": 1,
    "economy": 6.00,
    "strikeRate": 24.0,
    "oversBowled": 4.0
  },
  {
    "id": "maharaj",
    "name": "Keshav Maharaj",
    "teamId": "rr",
    "image": "/players/maharaj.png",
    "role": "Bowler",
    "nationality": "South Africa",
    "matches": 2,
    "wickets": 2,
    "economy": 6.50,
    "strikeRate": 18.0,
    "oversBowled": 6.0
  },
  {
    "id": "narine",
    "name": "Sunil Narine",
    "teamId": "kkr",
    "image": "/players/narine.png",
    "role": "All-rounder",
    "nationality": "West Indies",
    "matches": 15,
    "wickets": 17,
    "economy": 6.69,
    "oversBowled": 55.0,
    "runs": 488,
    "average": 34.85,
    "strikeRate": 180.74
  },
  {
    "id": "yadav",
    "name": "Mayank Yadav",
    "teamId": "lsg",
    "image": "/players/yadav.png",
    "role": "Bowler",
    "nationality": "India",
    "matches": 4,
    "wickets": 7,
    "economy": 6.98,
    "strikeRate": 10.4,
    "oversBowled": 12.1
  }
];

// Match Data
export interface Match {
  id: string;
  team1Id: string;
  team2Id: string;
  date: string;
  venue: string;
  result: string;
  team1Score?: string;
  team2Score?: string;
  status: "Upcoming" | "Live" | "Completed";
  finalStats?: string;
  player_match?: string;
}

export const matches: Match[] = [
  {
    "id": "match1",
    "team1Id": "kkr",
    "team2Id": "rcb",
    "date": "2025-03-22T19:30:00+05:30",
    "venue": "Eden Gardens, Kolkata",
    "result": "Upcoming match",
    "status": "Completed",
    team1Score: '174/8 (20)',
    team2Score: '177/3 (16.2)',
    finalStats: 'Royal Challengers Bengaluru won by 7 wkts',
    player_match: 'Krunal Pandya'
  },
  {
    "id": "match2",
    "team1Id": "srh",
    "team2Id": "rr",
    "date": "2025-03-23T15:30:00+05:30",
    "venue": "Rajiv Gandhi International Stadium, Hyderabad",
    "result": "Upcoming match",
    "status": "Completed",
    team1Score: '286/6 (20)',
    team2Score: '242/6 (20)',
    finalStats: 'Sunrisers Hyderabad won by 44 runs',
    player_match: ''
  },
  {
    "id": "match3",
    "team1Id": "csk",
    "team2Id": "mi",
    "date": "2025-03-23T19:30:00+05:30",
    "venue": "MA Chidambaram Stadium, Chennai",
    "result": "Upcoming match",
    "status": "Live",
    finalStats: 'Chennai Super Kings opt to bowl',
  },
  {
    "id": "match4",
    "team1Id": "dc",
    "team2Id": "lsg",
    "date": "2025-03-24T19:30:00+05:30",
    "venue": "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam",
    "result": "Upcoming match",
    "status": "Upcoming"
  },
  {
    "id": "match5",
    "team1Id": "gt",
    "team2Id": "pbks",
    "date": "2025-03-25T19:30:00+05:30",
    "venue": "Narendra Modi Stadium, Ahmedabad",
    "result": "Upcoming match",
    "status": "Upcoming"
  },
  {
    "id": "match6",
    "team1Id": "rr",
    "team2Id": "kkr",
    "date": "2025-03-26T19:30:00+05:30",
    "venue": "Barsapara Cricket Stadium, Guwahati",
    "result": "Upcoming match",
    "status": "Upcoming"
  },
  {
    "id": "match7",
    "team1Id": "srh",
    "team2Id": "lsg",
    "date": "2025-03-27T19:30:00+05:30",
    "venue": "Rajiv Gandhi International Stadium, Hyderabad",
    "result": "Upcoming match",
    "status": "Upcoming"
  },
  {
    "id": "match8",
    "team1Id": "csk",
    "team2Id": "rcb",
    "date": "2025-03-28T19:30:00+05:30",
    "venue": "MA Chidambaram Stadium, Chennai",
    "result": "Upcoming match",
    "status": "Upcoming"
  },
  {
    "id": "match9",
    "team1Id": "gt",
    "team2Id": "mi",
    "date": "2025-03-29T19:30:00+05:30",
    "venue": "Narendra Modi Stadium, Ahmedabad",
    "result": "Upcoming match",
    "status": "Upcoming"
  },
  {
    "id": "match10",
    "team1Id": "dc",
    "team2Id": "srh",
    "date": "2025-03-30T15:30:00+05:30",
    "venue": "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam",
    "result": "Upcoming match",
    "status": "Upcoming"
  }
];

// Top Performers
export interface TopPerformers {
  batsmen: Player[];
  bowlers: Player[];
  economyBowlers: Player[];
}

export const topPerformers: TopPerformers = {
  batsmen: [
    players.find(p => p.id === "kohli")!,
    players.find(p => p.id === "gaikwad")!,
    players.find(p => p.id === "parag")!,
    players.find(p => p.id === "head")!,
    players.find(p => p.id === "samson")!,
  ],
  bowlers: [
    players.find(p => p.id === "harshal")!,
    players.find(p => p.id === "varun")!,
    players.find(p => p.id === "bumrah")!,
    players.find(p => p.id === "russell")!,
    players.find(p => p.id === "harshit")!,
  ],
  economyBowlers: [
    players.find(p => p.id === "ellis")!,
    players.find(p => p.id === "bumrah")!,
    players.find(p => p.id === "maharaj")!,
    players.find(p => p.id === "narine")!,
    players.find(p => p.id === "yadav")!,
  ]
};
