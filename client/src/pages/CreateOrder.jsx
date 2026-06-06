import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import useWorkOrder from "@/hooks/useWorkOrder";
import { Loader2 } from "lucide-react";

const CreateOrder = () => {
  const { departments, createWorkOrder, loading } = useWorkOrder();
  const [data, setData] = useState({
    partName: "",
    partNumber: "",
    quantity: 0,
    dueDate: null,
  });

  const [dep, setDep] = useState("");
  const [drawings, setDrawings] = useState(null);
  const [documents, setDocuments] = useState(null);
  // console.log(dep);

  const handleOnChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    createWorkOrder({
      ...data,
      department: dep,
      drawings,
      documents,
    });
  };

  return (
    <div className="p-5">
      <form
        className="p-5 border rounded-md md:max-w-[50%] grid grid-cols-1 md:grid-cols-2 gap-5"
        onSubmit={handelOnSubmit}
      >
        <Field className="md:col-span-2">
          <FieldLabel htmlFor="partName">Part Name</FieldLabel>
          <Input
            type={"text"}
            id="partName"
            required
            name="partName"
            placeholder="Enter part name"
            onChange={handleOnChange}
          />
          <FieldError></FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="partNumber">Part Number</FieldLabel>
          <Input
            type={"text"}
            name="partNumber"
            required
            id="partNumber"
            placeholder="Enter part number"
            onChange={handleOnChange}
          />
          <FieldError></FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
          <Input
            type={"number"}
            name="quantity"
            required
            id="quantity"
            placeholder="Enter quantity"
            onChange={handleOnChange}
          />
          <FieldError></FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="department">Department</FieldLabel>
          <Select value={dep} onValueChange={(value) => setDep(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {departments?.map((dep) => (
                  <SelectItem key={dep._id} value={dep._id}>
                    {dep.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldError></FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="dueDate">Due Date</FieldLabel>
          <Input
            type={"date"}
            name="dueDate"
            required
            id="dueDate"
            placeholder="Enter due date"
            onChange={handleOnChange}
          />
          <FieldError></FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="drawings">Engineering Drawings</FieldLabel>
          <Input
            type={"file"}
            name="drawings"
            id="drawings"
            accept="image/*"
            multiple
            onChange={(e) => setDrawings(e.target.files || [])}
          />
          <FieldError></FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="documents">Documents</FieldLabel>
          <Input
            type={"file"}
            name="documents"
            id="documents"
            accept=".pdf"
            multiple
            onChange={(e) => setDocuments(e.target.files || [])}
          />
          <FieldError></FieldError>
        </Field>

        <Button
          className="max-w-1/2 bg-purple-400 hover:bg-purple-300 cursor-pointer focus:scale-95"
          type="submit"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin size-4" /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default CreateOrder;
