/* window is a global object in js 
so it'll have global scope

Scopes in JS:
1. Block scope: Variables declared inside a { } block cannot be accessed from outside the block
for eg 
{
    let x=2;
    --we can access x here
}
--now we can't access x here

2. Function Scope/Local Scope: variables declared within a JavaScript function, become LOCAL to the function.

for eg.

fuction Anything(){
    let x=7;
    let y=8;
    let z=x+y;
    return z;
    --we can access x,y and z here
}
--now we can't access x,y and z here outside the function

3. Global Scope






















*/