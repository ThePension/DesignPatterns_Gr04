class Command extends Model
{
    constructor(jsonCommand)
    {
        super();
        this.sandwiches = [];

        console.log(jsonCommand);

        if(Array.isArray(jsonCommand))
        {
            jsonCommand.forEach(sandwich => {
                this.sandwiches.push(Ingredient.parseSandwichFromJson(sandwich));
            });
        }
        else
        {
            this.sandwiches.push(jsonCommand);
        } 
    }

    static fetch()
    {
        return Model.fetch('command', Command);
    }

    addSandwich(sandwich)
    {
        // console.log(this);
        // console.log(sandwich);
        this.sandwiches.push(sandwich);

        // console.log(this);
    }

    save()
    {
        const storage = localStorage;

        Model.remove('command');

        Model.save(this, 'command');
    }
}