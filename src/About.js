import React, { Fragment } from "react";

function Myabout()
{
    return <h1>welcome to first file yyyyyyyyyyyyyyyyy </h1>
}
export default Myabout


export function Myabout1()
{
    return <h2>This is name export function</h2>
}


export function Myabout2()
{
    return <div>
        <h2>welcome</h2>
        <p>this is </p>
    </div>
}

export function Myabout3()
{
    return(
        <Fragment>
            <h1>this is heading</h1>
            <p>this is text</p>
            <ul>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
            </ul>
            <section className="box"></section>
        </Fragment>

    )
}

export function Heading()
{
    return(
        <Fragment>
            computer
        </Fragment>
    )
}



