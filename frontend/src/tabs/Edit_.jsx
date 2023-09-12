const React = require("react");
const Def = "./Info.jsx";

function Edit(data) {
  return (
    <Def>
      <main>
        <h1>Edit Destination</h1>
        <form method="POST" action={`/events/${data.events.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6" col-md-4 col-lg-3>
              <label htmlFor="title">Place Name</label>
              <input
                className="form-control"
                id="title"
                title="title"
                value={data.events.name}
                required
              />
            </div>
            <div className="form-group col-sm-6" col-md-4 col-lg-3>
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" type="url" id="pic" name="pic" />
            </div>
            <div className="form-group col-sm-6" col-md-4 col-lg-3>
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" />
            </div>
            <div className="form-group col-sm-6" col-md-4 col-lg-3>
              <label htmlFor="distance">Distance</label>
              <input className="form-control" id="distance" name="distance" />
            </div>
          </div>
          <div className="form-group col-sm-6" col-md-4 col-lg-3>
            <label htmlFor="maxGroupSize">Group Size</label>
            <input
              className="form-control"
              id="maxGroupSize"
              name="maxGroupSize"
              required
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit Changes"
          />
        </form>
      </main>
    </Def>
  );
}

export default Edit;
