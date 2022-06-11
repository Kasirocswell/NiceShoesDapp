const { assert } = require("chai")
const { inputToConfig } = require("@ethereum-waffle/compiler")
const { getNamedAccounts, deployments, ethers, networkConfig } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config.js")

!developmentChains.includes(network.name) ? describe.skip 
: describe("Raffle", async function() {
    let raffle, vrfCoordinatorV2Mock

    beforeEach(async function() {
        const { deployer } = await getNamedAccounts();
        await deployments.fixture("all");
        raffle = await ethers.getContract("Raffle", deployer);
        vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer);
    })
    describe("constructor", async function(){
        it("initializes the raffle correctly", async function() {
            const raffleState = await raffle.getRaffleState();
            assert.equal(raffleState.toString(), "0") 
        })
    })
})