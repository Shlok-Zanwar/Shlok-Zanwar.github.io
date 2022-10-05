import React, { useEffect } from 'react'
import LineTo from 'react-lineto'

function Grid({grid, loading, setLoading, search}) {


    function debounce(fn, ms) {
        let timer
        return _ => {
            clearTimeout(timer)
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms)
        };
    }


    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setLoading(true);
        }, 500)
        
        window.addEventListener('resize', debouncedHandleResize)
    })


    useEffect(() => {
        setTimeout(() => setLoading(false), 100);
    }, [loading])


    const makeOneRow = (row, rowIndex) => 
        row.map((cell, cellIndex) => {
            /*
                We need to check three conditions
                1) If the cell is 0, then we need to make it transparent
                2) If the cell is the search value, then we need to make it searched
                Else, we need to make it normal
            */
            const extraClassName = cell === search ? " searched" : cell === 0 ? " transparent" : "";
            return (
                <div className={`tree-node-div r${rowIndex.toString()}c${cellIndex.toString()} ${extraClassName}`} key={`r${rowIndex.toString()}c${cellIndex.toString()}`}>
                    {cell === 0 ? "" : cell}
                </div>
            )
        })


    const makeRows = () => {
        return grid.map((row, rowIndex) => (
            <div className="rows" key={"r" + rowIndex.toString()}>
                {makeOneRow(row, rowIndex)}
            </div>
        ))
    }

    
    var zIndex = -1;
    var makeArrows = () => {
        return(
            grid.map((row, rowIndex) => {
                return(
                    row.map((cell, cellIndex) => {
                        // If the cell is zero or its the last row of Grid (BFT) then it will obvio not have any lines from it
                        if(cell !== 0 && rowIndex < grid.length - 1){
                            var leftChildIndex = cellIndex;
                            var rightChildIndex = cellIndex + Math.pow(2, grid.length-rowIndex-1);

                            // If the left child is not zero, then we need to make a line from the current cell to the left child
                            // If the right child is not zero, then we need to make a line from the current cell to the right child
                            return(
                                <>
                                    {
                                        grid[rowIndex+1][leftChildIndex] !== 0 && (
                                            <LineTo 
                                                from={`r${rowIndex}c${cellIndex}`}
                                                to={`r${rowIndex+1}c${leftChildIndex}`}
                                                zIndex={zIndex}
                                                borderColor="rgba(255, 84, 17, 1)" 
                                                borderWidth={5}  
                                                fromAnchor="center" 
                                                // toAnchor="top center"  
                                                key={`r${rowIndex}c${cellIndex}r${rowIndex+1}c${leftChildIndex}`}
                                            />
                                        )
                                    }
                                    {
                                        grid[rowIndex+1][rightChildIndex] !== 0 && (
                                            <LineTo
                                                from={`r${rowIndex}c${cellIndex}`}
                                                to={`r${rowIndex+1}c${rightChildIndex}`}
                                                zIndex={zIndex}
                                                borderColor="rgba(255, 84, 17, 1)"
                                                borderWidth={5}
                                                fromAnchor="center"
                                                // toAnchor="top center"
                                                key={`r${rowIndex}c${cellIndex}r${rowIndex+1}c${rightChildIndex}`}
                                            />
                                        )
                                    }
                                </>
                            )


                        }
                    })
                )
            })
        )
    }


    return(
        <div className="tree-outer-div">
            <div className="tree-main-div">
                {makeRows()}
                {loading ? null : makeArrows() }
            </div>
        </div>
    )

}

export default Grid;
