import React from "react";
import buttonVarient from "./ButtonType";
import ButtonTemplate from "./ButtonTemplate";
import DisplayType from "./DisplayType";

const Button = () => (
  <div className="">
    <div className="space-y-10 sm:space-y-0 gap-y-10 sm:grid sm:grid-cols-2">
      <div className="">
        <DisplayType info="<Button />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.DefaultState}
          ButtonName="Default"
        />
      </div>
      <div className="">
        <DisplayType info="&:hover , &:focus"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.DefaultHoverState}
          ButtonName="Default"
        />
      </div>

      <div className="">
        <DisplayType info="<Button variant=”outline” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.OutlineState}
          ButtonName="Default"
        />
      </div>
      <div className="">
        <DisplayType info="&:hover , &:focus"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.OutlineHoverState}
          ButtonName="Default"
        />
      </div>

      <div className="">
        <DisplayType info="<Button variant=”text” />"></DisplayType>
        <ButtonTemplate style={buttonVarient.TextState} ButtonName="Default" />
      </div>
      <div className="">
        <DisplayType info="&:hover , &:focus"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.TextHoverState}
          ButtonName="Default"
        />
      </div>
    </div>
    <div className="mt-10">
      <DisplayType info="<Button disableShadow />"></DisplayType>
      <ButtonTemplate
        style={buttonVarient.DisableShadow}
        ButtonName="Default"
      />
    </div>
    <div className="mt-10 sm:grid sm:grid-cols-2 space-y-10 sm:space-y-0 gap-y-10">
      <div className="">
        <DisplayType info="<Button disabled />"></DisplayType>
        <ButtonTemplate style={buttonVarient.Disabled} ButtonName="Disabled" />
      </div>
      <div className="">
        <DisplayType info="<Button variant=”text” disabled />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.TextDisabled}
          ButtonName="Disabled"
        />
      </div>

      <div className="">
        <DisplayType info="<Button startIcon=”local_grocery_store” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.ButtonWithLeft}
          ButtonName="Default"
          Card="Left"
        />
      </div>
      <div className="">
        <DisplayType info="<Button startIcon=”local_grocery_store” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.ButtonWithLeft}
          ButtonName="Default"
          Card="Right"
        />
      </div>
    </div>
    <div className="mt-10 sm:grid sm:grid-cols-3 space-y-10 sm:space-y-0 gap-y-10">
      <div className="">
        <DisplayType info="<Button size=”sm” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.SmallButton}
          ButtonName="Default"
        />
      </div>
      <div className="">
        <DisplayType info="<Button size=”md” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.ButtonWithLeft}
          ButtonName="Default"
        />
      </div>
      <div className="">
        <DisplayType info="<Button size=”lg” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.LargeButton}
          ButtonName="Default"
        />
      </div>
    </div>
    <div className="mt-10 sm:grid sm:grid-cols-4 space-y-10 sm:space-y-0 gap-y-10 gap-x-5">
      <div className="">
        <DisplayType info="<Button color=”default” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.DefaultState}
          ButtonName="Default"
        />
      </div>
      <div className="">
        <DisplayType info="<Button color=”primary” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.DisableShadow}
          ButtonName="Default"
        />
      </div>
      <div className="">
        <DisplayType info="<Button color=”secondary” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.SecondaryButton}
          ButtonName="Secondary"
        />
      </div>
      <div className="">
        <DisplayType info="<Button color=”danger” />"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.DangerButton}
          ButtonName="Danger"
        />
      </div>
      <div className="">
        <DisplayType info="&:hover , &:focus"></DisplayType>
        <ButtonTemplate
          style={buttonVarient.DefaultState}
          ButtonName="Default"
        />
      </div>
      <div className="pt-5">
        <DisplayType info=""></DisplayType>
        <ButtonTemplate
          style={buttonVarient.PrimaryHover}
          ButtonName="Default"
        />
      </div>
      <div className="pt-5">
        <DisplayType info=""></DisplayType>
        <ButtonTemplate
          style={buttonVarient.SecondayButtonHover}
          ButtonName="Secondary"
        />
      </div>
      <div className="pt-5">
        <DisplayType info=""></DisplayType>
        <ButtonTemplate
          style={buttonVarient.DangerButtonHover}
          ButtonName="Danger"
        />
      </div>
    </div>
  </div>
);

export default Button;
