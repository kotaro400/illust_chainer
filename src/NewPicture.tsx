import { useRef, useState } from "react";
import { Layer, Stage, Line } from "react-konva";
import Konva from "konva";
import DrawMenu from "./DrawMenu";
import NewPictureHeader from "./NewPictureHeader";
import NewPictureInputModal from "./NewPictureInputModal";

interface LineType {
  points: number[];
  color: string;
  width: number;
  tool: "pen" | "eraser";
}

const NewPicture = () => {
  const [lines, setLines] = useState<LineType[]>([]);
  const [tool, setTool] = useState<"pen" | "eraser">('pen');
  const [color, setColor] = useState<string>("#000");
  const [width, setWidth] = useState<number>(5);
  const [visible, setVisible] = useState<boolean>(false);
  const isDrawing = useRef<boolean>(false);
  const stageRef = useRef<Konva.Stage>(null);

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y], color, width, tool }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = (e: any) => {
    isDrawing.current = false;    
  };

  const handleUndo = () => {
    setLines(lines.slice(0, lines.length - 1));    
  };

  return (
    <div>
      <NewPictureHeader onComplete={() => setVisible(true)} />
      <NewPictureInputModal
        visible={visible}
        onCreate={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />
      <Stage
        width={300}
        height={450}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMousemove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchEnd={handleMouseUp}
        style={{
          "border": "1px solid #000", 
          "display": "inline-block",
          "margin": `10px ${(window.innerWidth - 300) / 2 - 1}px`,
          "touchAction": "none",
        }}
        ref={stageRef}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={line.width}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
      <DrawMenu 
        color={color} changeColor={(color) => setColor(color)}
        width={width} changeWidth={(width) => setWidth(width)}
        tool={tool} changeTool={(tool) => setTool(tool)}
        undo={() => handleUndo()}
      />
    </div>
  );
};

export default NewPicture;