﻿using BlazorComponent;

namespace MASA.Blazor
{
    public partial class MSlideGroup : BSlideGroup
    {
        protected override void OnInitialized()
        {
            base.OnInitialized();

            ActiveClass = "m-slide-item--active";
        }

        protected override void OnParametersSet()
        {
            NextIcon ??= "mdi-chevron-right";
            PrevIcon ??= "mdi-chevron-left";
        }

        protected override void SetComponentClass()
        {
            base.SetComponentClass();

            CssProvider
                .Apply(css =>
                {
                    css.Add("m-item-group m-slide-group")
                        .AddIf("m-slide-group--is-overflowing", () => IsOverflowing)
                        .AddIf("m-slide-group--has-affixes", () => HasAffixes);
                })
                .Apply("next", css =>
                {
                    css.Add("m-slide-group__next")
                        .AddIf("m-slide-group__prev--disabled", () => !HasPrev);
                })
                .Apply("prev", css =>
                {
                    css.Add("m-slide-group__prev")
                        .AddIf("m-slide-group__prev--disabled", () => !HasPrev);
                })
                .Apply("wrapper", css => css.Add("m-slide-group__wrapper"))
                .Apply("content", css => css.Add("m-slide-group__content"));

            AbstractProvider
                .Apply(typeof(BSlideGroupPrev<>), typeof(BSlideGroupPrev<MSlideGroup>))
                .Apply(typeof(BSlideGroupNext<>), typeof(BSlideGroupNext<MSlideGroup>))
                .Apply<BIcon, MIcon>();
        }
    }
}