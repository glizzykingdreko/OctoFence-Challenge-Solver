const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

function getOctofenceJslc(ast) {
    let names = {};
    traverse(ast, {
        // it is declared inside a function
        FunctionDeclaration(path) {
            // we need to find the var declaration of 'octofence_token'
            // and get the value of it
            path.traverse({
                VariableDeclaration(path) {
                    if (path.node.declarations[0].id.name === "octofence_token") {
                        // we found the declaration
                        // the value is a binary expresssion with different other variables
                        // Should be around 4 variables summed up
                        // We wanna add the names to names
                        path.traverse({
                            Identifier(path) {
                                if (path.node.name != "octofence_token"){
                                    names[path.node.name] = false;
                                }
                            }
                        });
                    }
                }
            });
        }
    });
    traverse(ast, {
        FunctionDeclaration(path) {
            path.traverse({
                VariableDeclaration(path) {
                    if (Object.keys(names).includes(path.node.declarations[0].id.name)) {
                        // we found the declaration
                        //the value is a binary expresssion with different other variables
                        // Should be around 4-5 variables summed up
                        //we wanna firstly print them and then extract their values
                        const value = path.node.declarations[0].init;
                        names[path.node.declarations[0].id.name] = eval(generate(value).code);
                    }
                }
            });
        }
    });
    
    // Sum of all the Object.values
    let cookieValue = "";
    for (const [key, value] of Object.entries(names)) {
        cookieValue += value;
    }
    return cookieValue
}

module.exports = getOctofenceJslc;