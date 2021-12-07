'use strict'

const gProjects = [{
        id: "Minesweeper",
        name: "Minesweeper",
        title: "Just be carefull",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: "Minesweeper.png"
    },
    {
        id: "Design Page",
        name: "Design Page",
        title: "Touch those numbers!",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: "Design-Page.PNG"
    },
    {
        id: "Ball Board",
        name: "Ball Board",
        title: "All the balls jump!",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: "Ball-Board.PNG"
    },
    {
        id: "Chess",
        name: "Chess",
        title: "Play in different levels!",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: "Chess.png"
    },
    {
        id: "Todos",
        name: "Todos",
        title: "Start being organized",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: "Todo.PNG"
    },
    {
        id: "Books Shop",
        name: "Books Shop",
        title: "The best books you'll ever read",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: "Books.PNG"
    },
]

function getProjects() {
    return gProjects
}

function getProjectById(projId) {
    return gProjects.find(function(project) {
        return project.id === projId
    })
}