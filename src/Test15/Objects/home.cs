﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test15
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Home.
    /// </summary>
    // *** Start programmer edit section *** (home CustomAttributes)

    // *** End programmer edit section *** (home CustomAttributes)
    [ClassStorage("City")]
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("homeE", new string[] {
            "Номер as \'Номер\'",
            "КолвоПод as \'Колво под\'",
            "Этаж as \'Этаж\'",
            "street as \'Street\'",
            "street.имя as \'Имя\'"}, Hidden=new string[] {
            "street.имя"})]
    [MasterViewDefineAttribute("homeE", "street", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "имя")]
    [View("homeL", new string[] {
            "Номер as \'Номер\'",
            "КолвоПод as \'Колво под\'",
            "Этаж as \'Этаж\'",
            "street.имя as \'Имя\'"})]
    public class home : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private int fКолвоПод;
        
        private int fЭтаж;
        
        private IIS.Test15.street fstreet;
        
        // *** Start programmer edit section *** (home CustomMembers)

        // *** End programmer edit section *** (home CustomMembers)

        
        /// <summary>
        /// КолвоПод.
        /// </summary>
        // *** Start programmer edit section *** (home.КолвоПод CustomAttributes)

        // *** End programmer edit section *** (home.КолвоПод CustomAttributes)
        [NotNull()]
        public virtual int КолвоПод
        {
            get
            {
                // *** Start programmer edit section *** (home.КолвоПод Get start)

                // *** End programmer edit section *** (home.КолвоПод Get start)
                int result = this.fКолвоПод;
                // *** Start programmer edit section *** (home.КолвоПод Get end)

                // *** End programmer edit section *** (home.КолвоПод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.КолвоПод Set start)

                // *** End programmer edit section *** (home.КолвоПод Set start)
                this.fКолвоПод = value;
                // *** Start programmer edit section *** (home.КолвоПод Set end)

                // *** End programmer edit section *** (home.КолвоПод Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (home.Номер CustomAttributes)

        // *** End programmer edit section *** (home.Номер CustomAttributes)
        [NotNull()]
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (home.Номер Get start)

                // *** End programmer edit section *** (home.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (home.Номер Get end)

                // *** End programmer edit section *** (home.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.Номер Set start)

                // *** End programmer edit section *** (home.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (home.Номер Set end)

                // *** End programmer edit section *** (home.Номер Set end)
            }
        }
        
        /// <summary>
        /// Этаж.
        /// </summary>
        // *** Start programmer edit section *** (home.Этаж CustomAttributes)

        // *** End programmer edit section *** (home.Этаж CustomAttributes)
        [NotNull()]
        public virtual int Этаж
        {
            get
            {
                // *** Start programmer edit section *** (home.Этаж Get start)

                // *** End programmer edit section *** (home.Этаж Get start)
                int result = this.fЭтаж;
                // *** Start programmer edit section *** (home.Этаж Get end)

                // *** End programmer edit section *** (home.Этаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.Этаж Set start)

                // *** End programmer edit section *** (home.Этаж Set start)
                this.fЭтаж = value;
                // *** Start programmer edit section *** (home.Этаж Set end)

                // *** End programmer edit section *** (home.Этаж Set end)
            }
        }
        
        /// <summary>
        /// Home.
        /// </summary>
        // *** Start programmer edit section *** (home.street CustomAttributes)

        // *** End programmer edit section *** (home.street CustomAttributes)
        [PropertyStorage(new string[] {
                "street"})]
        [NotNull()]
        public virtual IIS.Test15.street street
        {
            get
            {
                // *** Start programmer edit section *** (home.street Get start)

                // *** End programmer edit section *** (home.street Get start)
                IIS.Test15.street result = this.fstreet;
                // *** Start programmer edit section *** (home.street Get end)

                // *** End programmer edit section *** (home.street Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.street Set start)

                // *** End programmer edit section *** (home.street Set start)
                this.fstreet = value;
                // *** Start programmer edit section *** (home.street Set end)

                // *** End programmer edit section *** (home.street Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "homeE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View homeE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("homeE", typeof(IIS.Test15.home));
                }
            }
            
            /// <summary>
            /// "homeL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View homeL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("homeL", typeof(IIS.Test15.home));
                }
            }
        }
    }
}
