function test(input) {

    let number = input.shift();
    let pattern = /(.+)\>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^\<\>]{3})\<\1/;

    for (let index = 0; index < number; index++) {
        let result = input[index].match(pattern);

        if (result !== null) {
            console.log(`Password: ${result[2]}${result[3]}${result[4]}${result[5]}`);
        }
        else {
            console.log('Try another password!');
        }
    }
}
test(
    [
        "3",
        "##>00|no|NO|!!!?<###",
        "##>123|yes|YES|!!!<##",
        "$$<111|noo|NOPE|<<>$$"
    ]
)