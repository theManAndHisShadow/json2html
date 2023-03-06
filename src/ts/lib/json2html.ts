export function json2html(json: string){
    let parent = document.createElement('div');
    parent.textContent = json;
    
    return parent;
}