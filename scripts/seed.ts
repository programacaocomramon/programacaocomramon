const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "ReactJS" },
                { name: "NodeJS" },
                { name: "Python" },
                { name: "PHP" },
            ],
        });

        console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();
