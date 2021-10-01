import { Dropdown, Menu } from 'antd';
import { BsFillCircleFill } from "react-icons/bs";
import { FaEraser, FaPen, FaUndoAlt } from "react-icons/fa";
import ColorPicker from "react-pick-color";

interface Props {
  color: string;
  changeColor: (color: string) => void;
  width: number;
  changeWidth: (width: number) => void;
  tool: "pen" | "eraser";
  changeTool: (tool: "pen" | "eraser") => void;
  undo: () => void;
}

const itemStyle = {
  "fontSize": "20px",
  "padding": "15px 30px"
}

const renderColorPicker = (color: string, changeColor: (color: string) => void) => (
  <div style={{"touchAction": "none"}}>
    <ColorPicker 
      color={color} 
      onChange={(color) => changeColor(color.hex)} hideInputs={true} hideAlpha={true} 
    />
  </div>
);

const renderWidthMenu = (width: number, changeWidth: (width: number) => void) => {
  return(
    <Menu onClick={({key}) => changeWidth(Number(key))} selectedKeys={[String(width)]}>
      <Menu.Item key="2" style={{...itemStyle}}>
        2px
      </Menu.Item>
      <Menu.Item key="5" style={{...itemStyle}}>
        5px
      </Menu.Item>
      <Menu.Item key="10" style={{...itemStyle}}>
        10px
      </Menu.Item>
    </Menu>
  )
};

const renderToolMenu = (tool: string, changeTool: (tool: "pen" | "eraser") => void) => {
  return(
    <Menu onClick={({key}) => changeTool(key as "pen" | "eraser")} selectedKeys={[tool]}>
      <Menu.Item key="pen" style={itemStyle}>
        ペン
      </Menu.Item>
      <Menu.Item key="eraser" style={itemStyle}>
        消しゴム
      </Menu.Item>
    </Menu>
  )
};

const DrawMenu = (props: Props) => {
  return(
    <div style={{"display": "flex", "justifyContent": "space-around", "padding": "20px 0"}}>
      <Dropdown overlay={renderColorPicker(props.color, props.changeColor)} trigger={['click']} placement="topCenter">
        <BsFillCircleFill style={{"fontSize": "30px", "color": props.color}}/>
      </Dropdown>
      <Dropdown overlay={renderWidthMenu(props.width, props.changeWidth)} trigger={["click"]} placement="topCenter">
        <div style={{"width": "30px", "height": "30px", "padding": `0 ${(30 - props.width) / 2}px`}}>
          <div style={{
            "height": "30px", 
            "width": `${props.width}px`, 
            "backgroundColor": props.color, 
            "borderRadius": `${props.width * 0.4}px`
            }}/>
        </div>
      </Dropdown>
      <Dropdown overlay={renderToolMenu(props.tool, props.changeTool)} trigger={['click']} placement="topCenter">
        {
          props.tool === "pen" ? <FaPen style={{"fontSize": "30px"}}/> : <FaEraser style={{"fontSize": "30px"}}/> 
        } 
      </Dropdown>
      <FaUndoAlt style={{"fontSize": "30px"}} onClick={props.undo}/> 
    </div>
  )
};

export default DrawMenu;