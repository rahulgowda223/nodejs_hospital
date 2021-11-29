module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      doctorname: { type:String,required:true,unique:true},
      department:String
    },
    
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Doctor = mongoose.model("Doctor", schema);
  return Doctor;
}
