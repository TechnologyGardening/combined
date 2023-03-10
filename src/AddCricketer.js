import * as React from "react";
export default function AddCricketer({
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
}) {
  return (
    <section>
      Cricketer Name:{" "}
      <input
        placeholder="Cicketer Name"
        value={cric_name}
        onChange={onChangeName}
      />
      <br />
      Cricketer Rank:{" "}
      <input
        placeholder="Cicketer Rank"
        value={cric_rank}
        onChange={onChangeRank}
      />
      <br />
      Cricketer Run:{" "}
      <input
        placeholder="Cicketer Run1"
        value={cric_run}
        onChange={onChangeRun}
      />
      <br />
      <button onClick={onClickAdd} disabled={addDisabled}>
        ADD
      </button>
      <button onClick={onClickUpdate} disabled={updateDisabled}>
        UPDATE
      </button>
    </section>
  );
}
