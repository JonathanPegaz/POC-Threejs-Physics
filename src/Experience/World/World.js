import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Landscape from "./Landscape.js";

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            //this.floor = new Floor()
            //this.fox = new Fox()
            this.landscape = new Landscape()
            this.environment = new Environment()
        })
    }

    update()
    {
        if(this.fox)
            this.fox.update()
    }
}