import { Content } from "./content-interface";

export class ContentList {
    private contents: Content[];

    constructor(){
        this.contents = []
    }

    get get(){
        return this.contents;
    }

    add(content: Content){
        this.contents.push(content);
    }

    getLength(){
        return this.contents.length;
    }

    getContent(index: number){
        if(index >= this.contents.length){
            return`
                <div>
                    <h1>Error finding content with this index</h1>
                </div>
            `;
        }
        
        let content = this.contents[index];
        return `
        <div class=''>
            <h1>${content.title}</h1>
            <img src="${content.imgURL}">
            <p>${content.description}</p>
            <p>Creator: ${content.creator}</p>
            <p>Type: ${content.type}</p>
        </div> <hr/>`;
    }
}