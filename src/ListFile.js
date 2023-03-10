import * as React from "react";
import axios from "axios";

export default function ListFun({ addcricketer }) {
  const [cricks, setCricks] = React.useState([]);
  const [cric_name, setName] = React.useState("");
  const [cric_run, setRun] = React.useState(0);
  const [cric_rank, setRank] = React.useState(0);
  const [new_rec, setNewRecord] = React.useState("");
  const [index, setIndex] = React.useState();
  const [addDisabled, setaddDisabled] = React.useState(false);
  const [updateDisabled, setupdateDisabled] = React.useState(true);

  React.useEffect(() => {
    axios.get("http://localhost:4000/users").then((resp) => {
      const x = resp.data;
      x.map((i) => {
        i["display"] = "none";
      });
      setCricks(x);
    });
  }, [new_rec]);
  function onClickAdd() {
    const data = {
      cric_name: cric_name,
      cric_run: cric_run,
      cric_rank: cric_rank,
    };
    axios.post("http://localhost:4000/users", data);
    timeStampChange();
    setName("");
    setRun(0);
    setRank(0);
  }
  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeRun(e) {
    setRun(e.target.value);
  }
  function onChangeRank(e) {
    setRank(e.target.value);
  }
  function timeStampChange() {
    var today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setNewRecord(time);
  }
  function onClickUpdate(e) {
    
  }
  function toggleDisplay(id) {}
  function deleteEntity(id) {
    axios.delete("http://localhost:4000/users", { cric_id: id });
    var today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setNewRecord(time);
  }
  function updatePlayer() {}
  return (
    <>
      {addcricketer({
        cric_name,
        cric_run,
        cric_rank,
        onChangeName,
        onChangeRun,
        onChangeRank,
        onClickAdd,
        onClickUpdate,
        addDisabled,
        updateDisabled,
      })}
      <ul>
        {cricks.map((i) => (
          <li key={i.cric_id}>
            {i.cric_name} {i.cric_rank} {i.cric_run} {i.display}
          </li>
        ))}
      </ul>
    </>
  );
}
