const fillial = [
    {
        id: 1,
        name: "Chilonzor"
    },
    {
        id: 2,
        name: "Xadra"
    },
    {
        id: 3,
        name: "Chimboy"
    },
]

const course = [
    {
        id: 1,
        name: "Web dasturlash",
        fillialId: [1, 3]
    },
    {
        id: 2,
        name: "Grafik dizayn",
        fillialId: [1, 2, 3]
    },
    {
        id: 3,
        name: "PM",
        fillialId: [1, 2]
    }

]

const group = [
    {
        id: 1,
        name: "N17",
        courrseId: 1,
        fillialId: 3
    },
    {
        id: 2,
        name: "N18",
        courrseId: 1,
        fillialId: 1
    },
    {
        id: 3,
        name: "G10",
        courrseId: 2,
        fillialId: 1
    },
    {
        id: 3,
        name: "G18",
        courrseId: 2,
        fillialId: 2
    },
    {
        id: 4,
        name: "G11",
        courrseId: 2,
        fillialId: 2
    },
    {
        id: 5,
        name: "G12",
        courrseId: 2,
        fillialId: 3
    },
    {
        id: 6,
        name: "PM1",
        courrseId: 3,
        fillialId: 2
    },
    {
        id: 7,
        name: "PM2",
        courrseId: 3,
        fillialId: 2
    },
]

const pupil = [
    {
        id: 1,
        name: "Ali Valiyev",
        groupId: 1
    },
    {
        id: 2,
        name: "Olim",
        groupId: 2
    },
    {
        id: 3,
        name: "Olimbek",
        groupId: 3
    },
]

export { fillial, course, group, pupil }