/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { INodeObject } from 'src/GeneralTypes'

interface IBinaryTreeProps {
    bstData: INodeObject
}
const BinaryTree: React.FC<IBinaryTreeProps> = ({ bstData }) => {
    return (
        <div style={{
            width: '100vw',
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                position: 'relative',
            }} className='nodes'>
                <svg width="1000" height="2000">
                    <g
                        transform={`translate(500,100)`}
                    >
                        <NewNode data={bstData} x={0} y={0} />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default BinaryTree

interface INewNodeProps {
    data: INodeObject | null;
    x: number;
    y: number;
}
const NewNode: React.FC<INewNodeProps> = ({ data, x, y }) => {
    if (!data) {
        return null
    }
    const SIZE = 200
    const childY = y + 1
    let leftChildX = !data.right ? x : x - (1 / Math.pow(getSiblingsSeparationRate(y), y))
    let rightChildX = !data.left ? x : x + (1 / Math.pow(getSiblingsSeparationRate(y), y))

    function getSiblingsSeparationRate(y: number) {
        if (y < 2) return 2
        else if (y < 3) return 1.5
        else if (y < 4) return 1.5
        else if (y < 6) return 1.3
        else return 1.4
    }

    return (
        <>
            {data.left &&
                <line
                    y2={y * SIZE}
                    x2={x * SIZE}
                    y1={childY * SIZE}
                    x1={leftChildX * SIZE} stroke="black"
                    strokeWidth={4}
                />
            }
            {data.right && <line
                y2={y * SIZE}
                x2={x * SIZE}
                y1={childY * SIZE}
                x1={rightChildX * SIZE} stroke="black"
                strokeWidth={4}
            />}
            <g transform={`translate(${x * SIZE},${y * SIZE})`}>
                <circle r="50" fill="white" stroke="black" strokeWidth={4} />
                <text x="-20" y="5" fill="black" fontSize="15" fontWeight="bold">{data.value}</text>
            </g>
            <NewNode x={leftChildX} y={childY} data={data.left} />
            <NewNode x={rightChildX} y={childY} data={data.right} />
        </>
    )
}