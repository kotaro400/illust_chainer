import { useRef, useState } from "react";
import { Layer, Stage, Line, Rect } from "react-konva";
import { useParams, useHistory } from "react-router-dom";
import Konva from "konva";
import axios from "axios";
import styled from "styled-components";
import DrawMenu from "./DrawMenu";
import NewPictureHeader from "./NewPictureHeader";
import NewPictureInputModal from "./NewPictureInputModal";

const NewPictureComponent = styled.div`
  background-color: #f8f8fa;
  min-height: 100vh;
  p {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin: 10px 0;
  }
`;

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
  const { order } = useParams<{order: string}>();
  const history = useHistory();

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

  const changePen = (width: number) => {
    setTool("pen");
    setWidth(width);
  };

  const changeEraser = (width: number) => {
    setTool("eraser");
    setWidth(width);
  };

  const createPicture = (title: string) => {
    const stage = stageRef.current;
    if (stage) {
      const dataURI = stage.toDataURL();
      const byteString = atob(dataURI.split(',')[1]);
      const mimeType = dataURI.split(',')[0].split(':')[1].split(';')[0];
      let buffer = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        buffer[i] = byteString.charCodeAt(i);
      }
      const blob =  new Blob([buffer], {type: mimeType});
      const data = new FormData();
      data.append("name", title);
      data.append("order", order);
      data.append("image", blob);
      axios.post(`${process.env.REACT_APP_API_URL}/pictures`, data, {
        headers: {
          'content-type': 'multipart/form-data',
        }
      }).then((res) => {
        history.push("/result", { pictures: res.data });
      });
      setVisible(false);    
    }
  };

  return (
    <NewPictureComponent>
      <NewPictureHeader onComplete={() => setVisible(true)} />
      <NewPictureInputModal
        visible={visible}
        onCreate={createPicture}
        onCancel={() => setVisible(false)}
      />
      <p>{order}枚目</p>
      <Stage
        width={300}
        height={400}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMousemove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchEnd={handleMouseUp}
        style={{
          "display": "inline-block",
          "margin": `10px ${(window.innerWidth - 300) / 2 - 1}px`,
          "touchAction": "none",
        }}
        ref={stageRef}
      >
        <Layer>
          <Rect x={0} y={0} width={300} height={400} fill="white" />
        </Layer>
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
        color={color} 
        changeColor={(color) => setColor(color)}
        width={width}
        tool={tool}
        changePen={changePen}
        changeEraser={changeEraser}
        undo={() => handleUndo()}
      />
    </NewPictureComponent>
  );
};

export default NewPicture;