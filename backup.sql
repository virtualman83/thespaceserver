PGDMP                         x        
   thespacedb     12.3 (Ubuntu 12.3-1.pgdg20.04+1)     12.3 (Ubuntu 12.3-1.pgdg20.04+1) H              0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16384 
   thespacedb    DATABASE     |   CREATE DATABASE thespacedb WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'fr_FR.UTF-8' LC_CTYPE = 'fr_FR.UTF-8';
    DROP DATABASE thespacedb;
                postgres    false            +           1259    16848 
   ActionType    TABLE     �   CREATE TABLE public."ActionType" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255)
);
     DROP TABLE public."ActionType";
       public         heap    postgres    false            *           1259    16846    ActionType_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ActionType_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."ActionType_ID_seq";
       public          postgres    false    299                       0    0    ActionType_ID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."ActionType_ID_seq" OWNED BY public."ActionType"."ID";
          public          postgres    false    298            -           1259    16859 
   Actionmenu    TABLE       CREATE TABLE public."Actionmenu" (
    "ID" integer NOT NULL,
    "Parameter1" integer,
    "Parameter2" character varying(255),
    "Parameter3" character varying(255),
    "ScreenZone" character varying(255),
    "ActionTypeID" integer,
    "MenuID" integer
);
     DROP TABLE public."Actionmenu";
       public         heap    postgres    false            ,           1259    16857    Actionmenu_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Actionmenu_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Actionmenu_ID_seq";
       public          postgres    false    301                       0    0    Actionmenu_ID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Actionmenu_ID_seq" OWNED BY public."Actionmenu"."ID";
          public          postgres    false    300                       1259    16426 
   Background    TABLE     �  CREATE TABLE public."Background" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255),
    "Url_Blur0" character varying(255),
    "Url_Blur1" character varying(255),
    "Url_Blur2" character varying(255),
    "Type" character varying(255) DEFAULT 'Image'::character varying
);
     DROP TABLE public."Background";
       public         heap    postgres    false                       1259    16424    Background_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Background_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Background_ID_seq";
       public          postgres    false    263                       0    0    Background_ID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Background_ID_seq" OWNED BY public."Background"."ID";
          public          postgres    false    262                       1259    16387    ClasseAlimentaire    TABLE     �   CREATE TABLE public."ClasseAlimentaire" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255)
);
 '   DROP TABLE public."ClasseAlimentaire";
       public         heap    postgres    false                        1259    16385    ClasseAlimentaire_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ClasseAlimentaire_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."ClasseAlimentaire_ID_seq";
       public          postgres    false    257                       0    0    ClasseAlimentaire_ID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."ClasseAlimentaire_ID_seq" OWNED BY public."ClasseAlimentaire"."ID";
          public          postgres    false    256                       1259    16409    Client    TABLE       CREATE TABLE public."Client" (
    "ID" integer NOT NULL,
    "UUID" character varying(255),
    "Nom" character varying(255),
    "Prenom" character varying(255),
    "UserName" character varying(255),
    "Password" character varying(255),
    "Numero" integer,
    "CP" character varying(255),
    "Ville" character varying(255),
    "Mail" character varying(255),
    "Facebook" character varying(255),
    "Twitter" character varying(255),
    "ImageProfil" character varying(255),
    "ClasseID" integer DEFAULT 5
);
    DROP TABLE public."Client";
       public         heap    postgres    false                       1259    16407    Client_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Client_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Client_ID_seq";
       public          postgres    false    261            	           0    0    Client_ID_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Client_ID_seq" OWNED BY public."Client"."ID";
          public          postgres    false    260            ;           1259    17626    Commande    TABLE     �  CREATE TABLE public."Commande" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "DateCommande" timestamp without time zone DEFAULT '2020-06-04 02:52:03.18'::timestamp without time zone,
    "HeureCommancementPreparation" timestamp without time zone,
    "HeureFinPreparation" timestamp without time zone,
    "Somme" double precision,
    "Quantite" integer DEFAULT 1,
    "Etat" integer,
    "Payer" boolean,
    "DateSortie" timestamp without time zone,
    "NatureCommande" integer,
    "Commentaire" character varying(255),
    "CompositionID" integer,
    "SessionID" integer,
    "ServiceID" integer,
    "MoyenPayementID" integer,
    "CommanderID" integer,
    "ResponderID" integer,
    "CommandeTypeID" integer
);
    DROP TABLE public."Commande";
       public         heap    postgres    false            7           1259    16948    CommandeExtra    TABLE     �   CREATE TABLE public."CommandeExtra" (
    "ID" integer NOT NULL,
    "AddRemove" boolean,
    "CommandeID" integer,
    "IngredientID" integer
);
 #   DROP TABLE public."CommandeExtra";
       public         heap    postgres    false            6           1259    16946    CommandeExtra_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."CommandeExtra_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."CommandeExtra_ID_seq";
       public          postgres    false    311            
           0    0    CommandeExtra_ID_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."CommandeExtra_ID_seq" OWNED BY public."CommandeExtra"."ID";
          public          postgres    false    310                       1259    16612    CommandeType    TABLE     �   CREATE TABLE public."CommandeType" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "Icone" character varying(255),
    "MenuID" integer
);
 "   DROP TABLE public."CommandeType";
       public         heap    postgres    false                       1259    16610    CommandeType_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."CommandeType_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."CommandeType_ID_seq";
       public          postgres    false    277                       0    0    CommandeType_ID_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."CommandeType_ID_seq" OWNED BY public."CommandeType"."ID";
          public          postgres    false    276            :           1259    17624    Commande_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Commande_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Commande_ID_seq";
       public          postgres    false    315                       0    0    Commande_ID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Commande_ID_seq" OWNED BY public."Commande"."ID";
          public          postgres    false    314                       1259    16454    Composition    TABLE     �  CREATE TABLE public."Composition" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" text,
    "Icone" character varying(255),
    "KeyWord" character varying(255),
    "Type" character varying(255) DEFAULT 'Chaud'::character varying,
    "Disponible" boolean DEFAULT true,
    "Prix" double precision DEFAULT '10'::double precision,
    "SceneBlurLevel" integer DEFAULT 0,
    "sceneID" integer
);
 !   DROP TABLE public."Composition";
       public         heap    postgres    false            '           1259    16808    CompositionClasse    TABLE     �   CREATE TABLE public."CompositionClasse" (
    "ID" integer NOT NULL,
    "CompositionID" integer,
    "ClasseAlimentaireID" integer
);
 '   DROP TABLE public."CompositionClasse";
       public         heap    postgres    false            &           1259    16806    CompositionClasse_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."CompositionClasse_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."CompositionClasse_ID_seq";
       public          postgres    false    295                       0    0    CompositionClasse_ID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."CompositionClasse_ID_seq" OWNED BY public."CompositionClasse"."ID";
          public          postgres    false    294                       1259    16676    CompositionClient    TABLE     |   CREATE TABLE public."CompositionClient" (
    "ID" integer NOT NULL,
    "CompositionID" integer,
    "ClientID" integer
);
 '   DROP TABLE public."CompositionClient";
       public         heap    postgres    false                       1259    16674    CompositionClient_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."CompositionClient_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."CompositionClient_ID_seq";
       public          postgres    false    279                       0    0    CompositionClient_ID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."CompositionClient_ID_seq" OWNED BY public."CompositionClient"."ID";
          public          postgres    false    278            G           1259    34610    CompositionDevice    TABLE     |   CREATE TABLE public."CompositionDevice" (
    "ID" integer NOT NULL,
    "CompositionID" integer,
    "DeviceID" integer
);
 '   DROP TABLE public."CompositionDevice";
       public         heap    postgres    false            F           1259    34608    CompositionDevice_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."CompositionDevice_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."CompositionDevice_ID_seq";
       public          postgres    false    327                       0    0    CompositionDevice_ID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."CompositionDevice_ID_seq" OWNED BY public."CompositionDevice"."ID";
          public          postgres    false    326            9           1259    16968    CompositionFamille    TABLE     ~   CREATE TABLE public."CompositionFamille" (
    "ID" integer NOT NULL,
    "CompositionID" integer,
    "FamilleID" integer
);
 (   DROP TABLE public."CompositionFamille";
       public         heap    postgres    false            8           1259    16966    CompositionFamille_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."CompositionFamille_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."CompositionFamille_ID_seq";
       public          postgres    false    313                       0    0    CompositionFamille_ID_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."CompositionFamille_ID_seq" OWNED BY public."CompositionFamille"."ID";
          public          postgres    false    312            
           1259    16452    Composition_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Composition_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Composition_ID_seq";
       public          postgres    false    267                       0    0    Composition_ID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Composition_ID_seq" OWNED BY public."Composition"."ID";
          public          postgres    false    266                       1259    16696 	   Constante    TABLE       CREATE TABLE public."Constante" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255),
    "Type" integer,
    "Valeur" character varying(255)
);
    DROP TABLE public."Constante";
       public         heap    postgres    false                       1259    16694    Constante_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Constante_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Constante_ID_seq";
       public          postgres    false    281                       0    0    Constante_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Constante_ID_seq" OWNED BY public."Constante"."ID";
          public          postgres    false    280            K           1259    34827    Device    TABLE     �  CREATE TABLE public."Device" (
    "ID" integer NOT NULL,
    "Nom" character varying(255) DEFAULT ''::character varying,
    "Description" character varying(255) DEFAULT ''::character varying,
    "KeyWord" character varying(255) DEFAULT ''::character varying,
    "DeviceType" integer DEFAULT 0,
    "DeviceUniqueIdentifier" character varying(255) DEFAULT 0,
    "Login" character varying(255),
    "Password" character varying(255),
    "ElementTransformID" integer,
    "LocationID" integer
);
    DROP TABLE public."Device";
       public         heap    postgres    false            =           1259    18043    DeviceTable    TABLE     �   CREATE TABLE public."DeviceTable" (
    "ID" integer NOT NULL,
    "Index" integer,
    "TableID" integer,
    "DeviceID" integer
);
 !   DROP TABLE public."DeviceTable";
       public         heap    postgres    false            <           1259    18041    DeviceTable_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."DeviceTable_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."DeviceTable_ID_seq";
       public          postgres    false    317                       0    0    DeviceTable_ID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."DeviceTable_ID_seq" OWNED BY public."DeviceTable"."ID";
          public          postgres    false    316            J           1259    34825    Device_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Device_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Device_ID_seq";
       public          postgres    false    331                       0    0    Device_ID_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Device_ID_seq" OWNED BY public."Device"."ID";
          public          postgres    false    330            ?           1259    18063    Element    TABLE     c  CREATE TABLE public."Element" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" text,
    "KeyWord" character varying(255),
    "Icone" character varying(255),
    "Url_Blur0" character varying(255),
    "Url_Blur1" character varying(255),
    "Url_Blur2" character varying(255),
    "ElementType" character varying(255)
);
    DROP TABLE public."Element";
       public         heap    postgres    false            A           1259    18074    ElementTransform    TABLE     7  CREATE TABLE public."ElementTransform" (
    "ID" integer NOT NULL,
    "PosInitialX" double precision DEFAULT '0'::double precision,
    "PosInitialY" double precision DEFAULT '0'::double precision,
    "InitialScale" double precision DEFAULT '0'::double precision,
    "InitialRotation" double precision DEFAULT '0'::double precision,
    "InitialAlpha" double precision DEFAULT '0'::double precision,
    "PosFinalX" double precision DEFAULT '0'::double precision,
    "PosFinalY" double precision DEFAULT '0'::double precision,
    "FinalScale" double precision DEFAULT '1'::double precision,
    "FinalRotation" double precision DEFAULT '0'::double precision,
    "FinalAlpha" double precision DEFAULT '0'::double precision,
    "AnimationSpeed" double precision DEFAULT '1'::double precision,
    "ZOrder" integer DEFAULT 1,
    "flipX" boolean DEFAULT false,
    "flipY" boolean DEFAULT false,
    "Rotation" boolean DEFAULT false,
    "RotationSpeed" double precision DEFAULT '0.01'::double precision,
    "ElementType" character varying(255),
    "ElementID" integer
);
 &   DROP TABLE public."ElementTransform";
       public         heap    postgres    false            @           1259    18072    ElementTransform_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ElementTransform_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."ElementTransform_ID_seq";
       public          postgres    false    321                       0    0    ElementTransform_ID_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."ElementTransform_ID_seq" OWNED BY public."ElementTransform"."ID";
          public          postgres    false    320            >           1259    18061    Element_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Element_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Element_ID_seq";
       public          postgres    false    319                       0    0    Element_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Element_ID_seq" OWNED BY public."Element"."ID";
          public          postgres    false    318                       1259    16707    Famille    TABLE     �   CREATE TABLE public."Famille" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255)
);
    DROP TABLE public."Famille";
       public         heap    postgres    false                       1259    16705    Famille_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Famille_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Famille_ID_seq";
       public          postgres    false    283                       0    0    Famille_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Famille_ID_seq" OWNED BY public."Famille"."ID";
          public          postgres    false    282                       1259    16718    FeedBack    TABLE       CREATE TABLE public."FeedBack" (
    "ID" integer NOT NULL,
    "NbStars" integer,
    "Comment" character varying(255),
    "Date" timestamp with time zone,
    "IDSession" integer,
    "Removable" boolean DEFAULT true,
    "Updatable" boolean DEFAULT true,
    "CommandeID" integer
);
    DROP TABLE public."FeedBack";
       public         heap    postgres    false                       1259    16716    FeedBack_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."FeedBack_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."FeedBack_ID_seq";
       public          postgres    false    285                       0    0    FeedBack_ID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."FeedBack_ID_seq" OWNED BY public."FeedBack"."ID";
          public          postgres    false    284            M           1259    34853 	   IPAdresse    TABLE     �   CREATE TABLE public."IPAdresse" (
    "ID" integer NOT NULL,
    "AdresseIP" character varying(255) DEFAULT ''::character varying,
    "Type" integer,
    "DeviceID" integer
);
    DROP TABLE public."IPAdresse";
       public         heap    postgres    false            L           1259    34851    IPAdresse_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."IPAdresse_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."IPAdresse_ID_seq";
       public          postgres    false    333                       0    0    IPAdresse_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."IPAdresse_ID_seq" OWNED BY public."IPAdresse"."ID";
          public          postgres    false    332                       1259    16733 
   Ingredient    TABLE     �  CREATE TABLE public."Ingredient" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" text,
    "KeyWord" character varying(255),
    "Icone" character varying(255),
    "Calories" double precision,
    "Glucides" double precision,
    "Lipides" double precision,
    "Proteines" double precision,
    "Prix" double precision,
    "Ajoutable" boolean,
    "Disponible" boolean
);
     DROP TABLE public."Ingredient";
       public         heap    postgres    false            !           1259    16744    IngredientComposition    TABLE     �   CREATE TABLE public."IngredientComposition" (
    "ID" integer NOT NULL,
    "Indisponsable" boolean DEFAULT false,
    "Quantite" double precision,
    "CompositionType" character varying(255),
    "CompositionID" integer,
    "IngredientID" integer
);
 +   DROP TABLE public."IngredientComposition";
       public         heap    postgres    false                        1259    16742    IngredientComposition_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."IngredientComposition_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."IngredientComposition_ID_seq";
       public          postgres    false    289                       0    0    IngredientComposition_ID_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."IngredientComposition_ID_seq" OWNED BY public."IngredientComposition"."ID";
          public          postgres    false    288            #           1259    16765    IngredientFamille    TABLE     |   CREATE TABLE public."IngredientFamille" (
    "ID" integer NOT NULL,
    "IngredientID" integer,
    "FamilleID" integer
);
 '   DROP TABLE public."IngredientFamille";
       public         heap    postgres    false            "           1259    16763    IngredientFamille_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."IngredientFamille_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."IngredientFamille_ID_seq";
       public          postgres    false    291                       0    0    IngredientFamille_ID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."IngredientFamille_ID_seq" OWNED BY public."IngredientFamille"."ID";
          public          postgres    false    290                       1259    16731    Ingredient_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Ingredient_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Ingredient_ID_seq";
       public          postgres    false    287                       0    0    Ingredient_ID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Ingredient_ID_seq" OWNED BY public."Ingredient"."ID";
          public          postgres    false    286            %           1259    16785    Light    TABLE     -  CREATE TABLE public."Light" (
    "ID" integer NOT NULL,
    "Red" double precision,
    "Green" double precision,
    "Blue" double precision,
    "InitialLightIntensity" double precision,
    "InitialLightInnerRadius" double precision,
    "InitialLightOuterRadius" double precision,
    "FinalLightIntensity" double precision,
    "FinalLightInnerRadius" double precision,
    "FinalLightOuterRadius" double precision,
    "PosInitialX" double precision DEFAULT '0'::double precision,
    "PosInitialY" double precision DEFAULT '0'::double precision,
    "InitialRotation" double precision DEFAULT '0'::double precision,
    "PosFinalX" double precision DEFAULT '0'::double precision,
    "PosFinalY" double precision DEFAULT '0'::double precision,
    "FinalRotation" double precision DEFAULT '0'::double precision,
    "AnimationSpeed" double precision DEFAULT '1'::double precision,
    "Rotation" boolean DEFAULT false,
    "RotationSpeed" double precision DEFAULT '0.01'::double precision,
    "LightShake" boolean DEFAULT false,
    "CompositionID" integer
);
    DROP TABLE public."Light";
       public         heap    postgres    false            $           1259    16783    Light_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Light_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Light_ID_seq";
       public          postgres    false    293                       0    0    Light_ID_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Light_ID_seq" OWNED BY public."Light"."ID";
          public          postgres    false    292            E           1259    26202    Location    TABLE     �   CREATE TABLE public."Location" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "KeyWord" character varying(255),
    "Description" character varying(255),
    "Icone" character varying(255)
);
    DROP TABLE public."Location";
       public         heap    postgres    false            D           1259    26200    Location_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Location_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Location_ID_seq";
       public          postgres    false    325                       0    0    Location_ID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Location_ID_seq" OWNED BY public."Location"."ID";
          public          postgres    false    324                       1259    16590    Menu    TABLE     ~  CREATE TABLE public."Menu" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255),
    "Actif" boolean DEFAULT true,
    "IsRoot" boolean DEFAULT false,
    "Removable" boolean DEFAULT true,
    "Updatable" boolean DEFAULT true,
    "MenuParentID" integer
);
    DROP TABLE public."Menu";
       public         heap    postgres    false                       1259    16588    Menu_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Menu_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Menu_ID_seq";
       public          postgres    false    275                       0    0    Menu_ID_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Menu_ID_seq" OWNED BY public."Menu"."ID";
          public          postgres    false    274                       1259    16559    MoyenPayement    TABLE     �   CREATE TABLE public."MoyenPayement" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255)
);
 #   DROP TABLE public."MoyenPayement";
       public         heap    postgres    false                       1259    16557    MoyenPayement_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."MoyenPayement_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."MoyenPayement_ID_seq";
       public          postgres    false    273                        0    0    MoyenPayement_ID_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."MoyenPayement_ID_seq" OWNED BY public."MoyenPayement"."ID";
          public          postgres    false    272            O           1259    43218 	   Parametre    TABLE     �   CREATE TABLE public."Parametre" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Type" character varying(255),
    "Valeur" character varying(255)
);
    DROP TABLE public."Parametre";
       public         heap    postgres    false            N           1259    43216    Parametre_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Parametre_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Parametre_ID_seq";
       public          postgres    false    335            !           0    0    Parametre_ID_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Parametre_ID_seq" OWNED BY public."Parametre"."ID";
          public          postgres    false    334            3           1259    16920    Prefab    TABLE     ^   CREATE TABLE public."Prefab" (
    "ID" integer NOT NULL,
    "Nom" character varying(255)
);
    DROP TABLE public."Prefab";
       public         heap    postgres    false            2           1259    16918    Prefab_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Prefab_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Prefab_ID_seq";
       public          postgres    false    307            "           0    0    Prefab_ID_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Prefab_ID_seq" OWNED BY public."Prefab"."ID";
          public          postgres    false    306                       1259    16398 
   Prestation    TABLE     �   CREATE TABLE public."Prestation" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255)
);
     DROP TABLE public."Prestation";
       public         heap    postgres    false                       1259    16396    Prestation_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Prestation_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Prestation_ID_seq";
       public          postgres    false    259            #           0    0    Prestation_ID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Prestation_ID_seq" OWNED BY public."Prestation"."ID";
          public          postgres    false    258            I           1259    34630    RepondeurCamera    TABLE     u   CREATE TABLE public."RepondeurCamera" (
    "ID" integer NOT NULL,
    "DeviceID" integer,
    "CameraID" integer
);
 %   DROP TABLE public."RepondeurCamera";
       public         heap    postgres    false            H           1259    34628    RepondeurCamera_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."RepondeurCamera_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."RepondeurCamera_ID_seq";
       public          postgres    false    329            $           0    0    RepondeurCamera_ID_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."RepondeurCamera_ID_seq" OWNED BY public."RepondeurCamera"."ID";
          public          postgres    false    328            	           1259    16438    Scene    TABLE     ?  CREATE TABLE public."Scene" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255),
    "ElementType" character varying(255),
    "SceneType" character varying(255),
    "backgroundID" integer
);
    DROP TABLE public."Scene";
       public         heap    postgres    false                       1259    16436    Scene_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Scene_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Scene_ID_seq";
       public          postgres    false    265            %           0    0    Scene_ID_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Scene_ID_seq" OWNED BY public."Scene"."ID";
          public          postgres    false    264                       1259    16545    Service    TABLE     �  CREATE TABLE public."Service" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255),
    "Par" integer DEFAULT 0 NOT NULL,
    "Coef" double precision DEFAULT '0'::double precision NOT NULL,
    "Valeur" double precision DEFAULT '0'::double precision NOT NULL
);
    DROP TABLE public."Service";
       public         heap    postgres    false                       1259    16543    Service_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Service_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Service_ID_seq";
       public          postgres    false    271            &           0    0    Service_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Service_ID_seq" OWNED BY public."Service"."ID";
          public          postgres    false    270                       1259    16530    Session    TABLE     >  CREATE TABLE public."Session" (
    "ID" integer NOT NULL,
    "StartDate" timestamp without time zone DEFAULT '2020-05-27 14:32:29.331'::timestamp without time zone,
    "EndDate" timestamp without time zone DEFAULT '2020-05-27 14:32:29.331'::timestamp without time zone,
    "Open" boolean,
    "IDTable" integer
);
    DROP TABLE public."Session";
       public         heap    postgres    false            5           1259    16928    SessionDevice    TABLE     t   CREATE TABLE public."SessionDevice" (
    "ID" integer NOT NULL,
    "SessionID" integer,
    "DeviceID" integer
);
 #   DROP TABLE public."SessionDevice";
       public         heap    postgres    false            4           1259    16926    SessionDevice_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."SessionDevice_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."SessionDevice_ID_seq";
       public          postgres    false    309            '           0    0    SessionDevice_ID_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."SessionDevice_ID_seq" OWNED BY public."SessionDevice"."ID";
          public          postgres    false    308                       1259    16528    Session_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Session_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Session_ID_seq";
       public          postgres    false    269            (           0    0    Session_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Session_ID_seq" OWNED BY public."Session"."ID";
          public          postgres    false    268            /           1259    16881    SpriteImage    TABLE     �   CREATE TABLE public."SpriteImage" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "Icone" character varying(255)
);
 !   DROP TABLE public."SpriteImage";
       public         heap    postgres    false            .           1259    16879    SpriteImage_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."SpriteImage_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."SpriteImage_ID_seq";
       public          postgres    false    303            )           0    0    SpriteImage_ID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."SpriteImage_ID_seq" OWNED BY public."SpriteImage"."ID";
          public          postgres    false    302            C           1259    18103    Table    TABLE     �   CREATE TABLE public."Table" (
    "ID" integer NOT NULL,
    "Nom" character varying(255),
    "Description" character varying(255),
    "KeyWord" character varying(255),
    "TableType" character varying(255),
    "ElementTransformID" integer
);
    DROP TABLE public."Table";
       public         heap    postgres    false            B           1259    18101    Table_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Table_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Table_ID_seq";
       public          postgres    false    323            *           0    0    Table_ID_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Table_ID_seq" OWNED BY public."Table"."ID";
          public          postgres    false    322            1           1259    16912    TransformRecipient    TABLE     �   CREATE TABLE public."TransformRecipient" (
    "ID" integer NOT NULL,
    "RecipientId" integer,
    "ElementTransformId" integer
);
 (   DROP TABLE public."TransformRecipient";
       public         heap    postgres    false            0           1259    16910    TransformRecipient_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."TransformRecipient_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."TransformRecipient_ID_seq";
       public          postgres    false    305            +           0    0    TransformRecipient_ID_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."TransformRecipient_ID_seq" OWNED BY public."TransformRecipient"."ID";
          public          postgres    false    304            )           1259    16828    UnCompatibleClasses    TABLE     �   CREATE TABLE public."UnCompatibleClasses" (
    "ID" integer NOT NULL,
    "ClasseAlimentaireID" integer,
    "UnCompatibleClasseID" integer
);
 )   DROP TABLE public."UnCompatibleClasses";
       public         heap    postgres    false            (           1259    16826    UnCompatibleClasses_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."UnCompatibleClasses_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."UnCompatibleClasses_ID_seq";
       public          postgres    false    297            ,           0    0    UnCompatibleClasses_ID_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."UnCompatibleClasses_ID_seq" OWNED BY public."UnCompatibleClasses"."ID";
          public          postgres    false    296                       2604    16851    ActionType ID    DEFAULT     t   ALTER TABLE ONLY public."ActionType" ALTER COLUMN "ID" SET DEFAULT nextval('public."ActionType_ID_seq"'::regclass);
 @   ALTER TABLE public."ActionType" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    299    298    299            �           2604    16862    Actionmenu ID    DEFAULT     t   ALTER TABLE ONLY public."Actionmenu" ALTER COLUMN "ID" SET DEFAULT nextval('public."Actionmenu_ID_seq"'::regclass);
 @   ALTER TABLE public."Actionmenu" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    300    301    301            R           2604    16429    Background ID    DEFAULT     t   ALTER TABLE ONLY public."Background" ALTER COLUMN "ID" SET DEFAULT nextval('public."Background_ID_seq"'::regclass);
 @   ALTER TABLE public."Background" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    263    262    263            N           2604    16390    ClasseAlimentaire ID    DEFAULT     �   ALTER TABLE ONLY public."ClasseAlimentaire" ALTER COLUMN "ID" SET DEFAULT nextval('public."ClasseAlimentaire_ID_seq"'::regclass);
 G   ALTER TABLE public."ClasseAlimentaire" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    257    256    257            P           2604    16412 	   Client ID    DEFAULT     l   ALTER TABLE ONLY public."Client" ALTER COLUMN "ID" SET DEFAULT nextval('public."Client_ID_seq"'::regclass);
 <   ALTER TABLE public."Client" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    260    261    261            �           2604    17629    Commande ID    DEFAULT     p   ALTER TABLE ONLY public."Commande" ALTER COLUMN "ID" SET DEFAULT nextval('public."Commande_ID_seq"'::regclass);
 >   ALTER TABLE public."Commande" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    315    314    315            �           2604    16951    CommandeExtra ID    DEFAULT     z   ALTER TABLE ONLY public."CommandeExtra" ALTER COLUMN "ID" SET DEFAULT nextval('public."CommandeExtra_ID_seq"'::regclass);
 C   ALTER TABLE public."CommandeExtra" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    311    310    311            g           2604    16615    CommandeType ID    DEFAULT     x   ALTER TABLE ONLY public."CommandeType" ALTER COLUMN "ID" SET DEFAULT nextval('public."CommandeType_ID_seq"'::regclass);
 B   ALTER TABLE public."CommandeType" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    277    276    277            U           2604    16457    Composition ID    DEFAULT     v   ALTER TABLE ONLY public."Composition" ALTER COLUMN "ID" SET DEFAULT nextval('public."Composition_ID_seq"'::regclass);
 A   ALTER TABLE public."Composition" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    267    266    267            }           2604    16811    CompositionClasse ID    DEFAULT     �   ALTER TABLE ONLY public."CompositionClasse" ALTER COLUMN "ID" SET DEFAULT nextval('public."CompositionClasse_ID_seq"'::regclass);
 G   ALTER TABLE public."CompositionClasse" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    295    294    295            h           2604    16679    CompositionClient ID    DEFAULT     �   ALTER TABLE ONLY public."CompositionClient" ALTER COLUMN "ID" SET DEFAULT nextval('public."CompositionClient_ID_seq"'::regclass);
 G   ALTER TABLE public."CompositionClient" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    278    279    279            �           2604    34613    CompositionDevice ID    DEFAULT     �   ALTER TABLE ONLY public."CompositionDevice" ALTER COLUMN "ID" SET DEFAULT nextval('public."CompositionDevice_ID_seq"'::regclass);
 G   ALTER TABLE public."CompositionDevice" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    327    326    327            �           2604    16971    CompositionFamille ID    DEFAULT     �   ALTER TABLE ONLY public."CompositionFamille" ALTER COLUMN "ID" SET DEFAULT nextval('public."CompositionFamille_ID_seq"'::regclass);
 H   ALTER TABLE public."CompositionFamille" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    312    313    313            i           2604    16699    Constante ID    DEFAULT     r   ALTER TABLE ONLY public."Constante" ALTER COLUMN "ID" SET DEFAULT nextval('public."Constante_ID_seq"'::regclass);
 ?   ALTER TABLE public."Constante" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    280    281    281            �           2604    34830 	   Device ID    DEFAULT     l   ALTER TABLE ONLY public."Device" ALTER COLUMN "ID" SET DEFAULT nextval('public."Device_ID_seq"'::regclass);
 <   ALTER TABLE public."Device" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    331    330    331            �           2604    18046    DeviceTable ID    DEFAULT     v   ALTER TABLE ONLY public."DeviceTable" ALTER COLUMN "ID" SET DEFAULT nextval('public."DeviceTable_ID_seq"'::regclass);
 A   ALTER TABLE public."DeviceTable" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    316    317    317            �           2604    18066 
   Element ID    DEFAULT     n   ALTER TABLE ONLY public."Element" ALTER COLUMN "ID" SET DEFAULT nextval('public."Element_ID_seq"'::regclass);
 =   ALTER TABLE public."Element" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    318    319    319            �           2604    18077    ElementTransform ID    DEFAULT     �   ALTER TABLE ONLY public."ElementTransform" ALTER COLUMN "ID" SET DEFAULT nextval('public."ElementTransform_ID_seq"'::regclass);
 F   ALTER TABLE public."ElementTransform" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    321    320    321            j           2604    16710 
   Famille ID    DEFAULT     n   ALTER TABLE ONLY public."Famille" ALTER COLUMN "ID" SET DEFAULT nextval('public."Famille_ID_seq"'::regclass);
 =   ALTER TABLE public."Famille" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    282    283    283            k           2604    16721    FeedBack ID    DEFAULT     p   ALTER TABLE ONLY public."FeedBack" ALTER COLUMN "ID" SET DEFAULT nextval('public."FeedBack_ID_seq"'::regclass);
 >   ALTER TABLE public."FeedBack" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    285    284    285            �           2604    34856    IPAdresse ID    DEFAULT     r   ALTER TABLE ONLY public."IPAdresse" ALTER COLUMN "ID" SET DEFAULT nextval('public."IPAdresse_ID_seq"'::regclass);
 ?   ALTER TABLE public."IPAdresse" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    332    333    333            n           2604    16736    Ingredient ID    DEFAULT     t   ALTER TABLE ONLY public."Ingredient" ALTER COLUMN "ID" SET DEFAULT nextval('public."Ingredient_ID_seq"'::regclass);
 @   ALTER TABLE public."Ingredient" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    287    286    287            o           2604    16747    IngredientComposition ID    DEFAULT     �   ALTER TABLE ONLY public."IngredientComposition" ALTER COLUMN "ID" SET DEFAULT nextval('public."IngredientComposition_ID_seq"'::regclass);
 K   ALTER TABLE public."IngredientComposition" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    288    289    289            q           2604    16768    IngredientFamille ID    DEFAULT     �   ALTER TABLE ONLY public."IngredientFamille" ALTER COLUMN "ID" SET DEFAULT nextval('public."IngredientFamille_ID_seq"'::regclass);
 G   ALTER TABLE public."IngredientFamille" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    291    290    291            t           2604    16788    Light ID    DEFAULT     j   ALTER TABLE ONLY public."Light" ALTER COLUMN "ID" SET DEFAULT nextval('public."Light_ID_seq"'::regclass);
 ;   ALTER TABLE public."Light" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    293    292    293            �           2604    26205    Location ID    DEFAULT     p   ALTER TABLE ONLY public."Location" ALTER COLUMN "ID" SET DEFAULT nextval('public."Location_ID_seq"'::regclass);
 >   ALTER TABLE public."Location" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    325    324    325            b           2604    16593    Menu ID    DEFAULT     h   ALTER TABLE ONLY public."Menu" ALTER COLUMN "ID" SET DEFAULT nextval('public."Menu_ID_seq"'::regclass);
 :   ALTER TABLE public."Menu" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    275    274    275            a           2604    16562    MoyenPayement ID    DEFAULT     z   ALTER TABLE ONLY public."MoyenPayement" ALTER COLUMN "ID" SET DEFAULT nextval('public."MoyenPayement_ID_seq"'::regclass);
 C   ALTER TABLE public."MoyenPayement" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    273    272    273            �           2604    43221    Parametre ID    DEFAULT     r   ALTER TABLE ONLY public."Parametre" ALTER COLUMN "ID" SET DEFAULT nextval('public."Parametre_ID_seq"'::regclass);
 ?   ALTER TABLE public."Parametre" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    334    335    335            �           2604    16923 	   Prefab ID    DEFAULT     l   ALTER TABLE ONLY public."Prefab" ALTER COLUMN "ID" SET DEFAULT nextval('public."Prefab_ID_seq"'::regclass);
 <   ALTER TABLE public."Prefab" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    306    307    307            O           2604    16401    Prestation ID    DEFAULT     t   ALTER TABLE ONLY public."Prestation" ALTER COLUMN "ID" SET DEFAULT nextval('public."Prestation_ID_seq"'::regclass);
 @   ALTER TABLE public."Prestation" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    258    259    259            �           2604    34633    RepondeurCamera ID    DEFAULT     ~   ALTER TABLE ONLY public."RepondeurCamera" ALTER COLUMN "ID" SET DEFAULT nextval('public."RepondeurCamera_ID_seq"'::regclass);
 E   ALTER TABLE public."RepondeurCamera" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    328    329    329            T           2604    16441    Scene ID    DEFAULT     j   ALTER TABLE ONLY public."Scene" ALTER COLUMN "ID" SET DEFAULT nextval('public."Scene_ID_seq"'::regclass);
 ;   ALTER TABLE public."Scene" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    265    264    265            ]           2604    16548 
   Service ID    DEFAULT     n   ALTER TABLE ONLY public."Service" ALTER COLUMN "ID" SET DEFAULT nextval('public."Service_ID_seq"'::regclass);
 =   ALTER TABLE public."Service" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    270    271    271            Z           2604    16533 
   Session ID    DEFAULT     n   ALTER TABLE ONLY public."Session" ALTER COLUMN "ID" SET DEFAULT nextval('public."Session_ID_seq"'::regclass);
 =   ALTER TABLE public."Session" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    269    268    269            �           2604    16931    SessionDevice ID    DEFAULT     z   ALTER TABLE ONLY public."SessionDevice" ALTER COLUMN "ID" SET DEFAULT nextval('public."SessionDevice_ID_seq"'::regclass);
 C   ALTER TABLE public."SessionDevice" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    309    308    309            �           2604    16884    SpriteImage ID    DEFAULT     v   ALTER TABLE ONLY public."SpriteImage" ALTER COLUMN "ID" SET DEFAULT nextval('public."SpriteImage_ID_seq"'::regclass);
 A   ALTER TABLE public."SpriteImage" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    302    303    303            �           2604    18106    Table ID    DEFAULT     j   ALTER TABLE ONLY public."Table" ALTER COLUMN "ID" SET DEFAULT nextval('public."Table_ID_seq"'::regclass);
 ;   ALTER TABLE public."Table" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    322    323    323            �           2604    16915    TransformRecipient ID    DEFAULT     �   ALTER TABLE ONLY public."TransformRecipient" ALTER COLUMN "ID" SET DEFAULT nextval('public."TransformRecipient_ID_seq"'::regclass);
 H   ALTER TABLE public."TransformRecipient" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    304    305    305            ~           2604    16831    UnCompatibleClasses ID    DEFAULT     �   ALTER TABLE ONLY public."UnCompatibleClasses" ALTER COLUMN "ID" SET DEFAULT nextval('public."UnCompatibleClasses_ID_seq"'::regclass);
 I   ALTER TABLE public."UnCompatibleClasses" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    296    297    297            �          0    16848 
   ActionType 
   TABLE DATA           M   COPY public."ActionType" ("ID", "Nom", "Description", "KeyWord") FROM stdin;
    public          postgres    false    299   ��      �          0    16859 
   Actionmenu 
   TABLE DATA           ~   COPY public."Actionmenu" ("ID", "Parameter1", "Parameter2", "Parameter3", "ScreenZone", "ActionTypeID", "MenuID") FROM stdin;
    public          postgres    false    301   ��      �          0    16426 
   Background 
   TABLE DATA           �   COPY public."Background" ("ID", "Nom", "Description", "KeyWord", "Icone", "Url_Blur0", "Url_Blur1", "Url_Blur2", "Type") FROM stdin;
    public          postgres    false    263   h�      �          0    16387    ClasseAlimentaire 
   TABLE DATA           ]   COPY public."ClasseAlimentaire" ("ID", "Nom", "Description", "KeyWord", "Icone") FROM stdin;
    public          postgres    false    257   q�      �          0    16409    Client 
   TABLE DATA           �   COPY public."Client" ("ID", "UUID", "Nom", "Prenom", "UserName", "Password", "Numero", "CP", "Ville", "Mail", "Facebook", "Twitter", "ImageProfil", "ClasseID") FROM stdin;
    public          postgres    false    261   �      �          0    17626    Commande 
   TABLE DATA           ;  COPY public."Commande" ("ID", "Nom", "DateCommande", "HeureCommancementPreparation", "HeureFinPreparation", "Somme", "Quantite", "Etat", "Payer", "DateSortie", "NatureCommande", "Commentaire", "CompositionID", "SessionID", "ServiceID", "MoyenPayementID", "CommanderID", "ResponderID", "CommandeTypeID") FROM stdin;
    public          postgres    false    315   ;�      �          0    16948    CommandeExtra 
   TABLE DATA           Z   COPY public."CommandeExtra" ("ID", "AddRemove", "CommandeID", "IngredientID") FROM stdin;
    public          postgres    false    311   -�      �          0    16612    CommandeType 
   TABLE DATA           W   COPY public."CommandeType" ("ID", "Nom", "Description", "Icone", "MenuID") FROM stdin;
    public          postgres    false    277   ��      �          0    16454    Composition 
   TABLE DATA           �   COPY public."Composition" ("ID", "Nom", "Description", "Icone", "KeyWord", "Type", "Disponible", "Prix", "SceneBlurLevel", "sceneID") FROM stdin;
    public          postgres    false    267   `�      �          0    16808    CompositionClasse 
   TABLE DATA           [   COPY public."CompositionClasse" ("ID", "CompositionID", "ClasseAlimentaireID") FROM stdin;
    public          postgres    false    295   t�      �          0    16676    CompositionClient 
   TABLE DATA           P   COPY public."CompositionClient" ("ID", "CompositionID", "ClientID") FROM stdin;
    public          postgres    false    279   ��      �          0    34610    CompositionDevice 
   TABLE DATA           P   COPY public."CompositionDevice" ("ID", "CompositionID", "DeviceID") FROM stdin;
    public          postgres    false    327   ƶ      �          0    16968    CompositionFamille 
   TABLE DATA           R   COPY public."CompositionFamille" ("ID", "CompositionID", "FamilleID") FROM stdin;
    public          postgres    false    313   ��      �          0    16696 	   Constante 
   TABLE DATA           g   COPY public."Constante" ("ID", "Nom", "Description", "KeyWord", "Icone", "Type", "Valeur") FROM stdin;
    public          postgres    false    281   ;�      �          0    34827    Device 
   TABLE DATA           �   COPY public."Device" ("ID", "Nom", "Description", "KeyWord", "DeviceType", "DeviceUniqueIdentifier", "Login", "Password", "ElementTransformID", "LocationID") FROM stdin;
    public          postgres    false    331   {�      �          0    18043    DeviceTable 
   TABLE DATA           M   COPY public."DeviceTable" ("ID", "Index", "TableID", "DeviceID") FROM stdin;
    public          postgres    false    317   b�      �          0    18063    Element 
   TABLE DATA           �   COPY public."Element" ("ID", "Nom", "Description", "KeyWord", "Icone", "Url_Blur0", "Url_Blur1", "Url_Blur2", "ElementType") FROM stdin;
    public          postgres    false    319   ��      �          0    18074    ElementTransform 
   TABLE DATA           1  COPY public."ElementTransform" ("ID", "PosInitialX", "PosInitialY", "InitialScale", "InitialRotation", "InitialAlpha", "PosFinalX", "PosFinalY", "FinalScale", "FinalRotation", "FinalAlpha", "AnimationSpeed", "ZOrder", "flipX", "flipY", "Rotation", "RotationSpeed", "ElementType", "ElementID") FROM stdin;
    public          postgres    false    321   V�      �          0    16707    Famille 
   TABLE DATA           S   COPY public."Famille" ("ID", "Nom", "Description", "KeyWord", "Icone") FROM stdin;
    public          postgres    false    283   J�      �          0    16718    FeedBack 
   TABLE DATA           }   COPY public."FeedBack" ("ID", "NbStars", "Comment", "Date", "IDSession", "Removable", "Updatable", "CommandeID") FROM stdin;
    public          postgres    false    285   f�      �          0    34853 	   IPAdresse 
   TABLE DATA           L   COPY public."IPAdresse" ("ID", "AdresseIP", "Type", "DeviceID") FROM stdin;
    public          postgres    false    333   ��      �          0    16733 
   Ingredient 
   TABLE DATA           �   COPY public."Ingredient" ("ID", "Nom", "Description", "KeyWord", "Icone", "Calories", "Glucides", "Lipides", "Proteines", "Prix", "Ajoutable", "Disponible") FROM stdin;
    public          postgres    false    287   ��      �          0    16744    IngredientComposition 
   TABLE DATA           �   COPY public."IngredientComposition" ("ID", "Indisponsable", "Quantite", "CompositionType", "CompositionID", "IngredientID") FROM stdin;
    public          postgres    false    289   1�      �          0    16765    IngredientFamille 
   TABLE DATA           P   COPY public."IngredientFamille" ("ID", "IngredientID", "FamilleID") FROM stdin;
    public          postgres    false    291   ��      �          0    16785    Light 
   TABLE DATA           �  COPY public."Light" ("ID", "Red", "Green", "Blue", "InitialLightIntensity", "InitialLightInnerRadius", "InitialLightOuterRadius", "FinalLightIntensity", "FinalLightInnerRadius", "FinalLightOuterRadius", "PosInitialX", "PosInitialY", "InitialRotation", "PosFinalX", "PosFinalY", "FinalRotation", "AnimationSpeed", "Rotation", "RotationSpeed", "LightShake", "CompositionID") FROM stdin;
    public          postgres    false    293   ��      �          0    26202    Location 
   TABLE DATA           T   COPY public."Location" ("ID", "Nom", "KeyWord", "Description", "Icone") FROM stdin;
    public          postgres    false    325   �      �          0    16590    Menu 
   TABLE DATA           �   COPY public."Menu" ("ID", "Nom", "Description", "KeyWord", "Icone", "Actif", "IsRoot", "Removable", "Updatable", "MenuParentID") FROM stdin;
    public          postgres    false    275   ��      �          0    16559    MoyenPayement 
   TABLE DATA           Y   COPY public."MoyenPayement" ("ID", "Nom", "Description", "KeyWord", "Icone") FROM stdin;
    public          postgres    false    273   *�      �          0    43218 	   Parametre 
   TABLE DATA           ^   COPY public."Parametre" ("ID", "Nom", "Description", "KeyWord", "Type", "Valeur") FROM stdin;
    public          postgres    false    335   G�      �          0    16920    Prefab 
   TABLE DATA           /   COPY public."Prefab" ("ID", "Nom") FROM stdin;
    public          postgres    false    307   d�      �          0    16398 
   Prestation 
   TABLE DATA           V   COPY public."Prestation" ("ID", "Nom", "Description", "KeyWord", "Icone") FROM stdin;
    public          postgres    false    259   ��      �          0    34630    RepondeurCamera 
   TABLE DATA           I   COPY public."RepondeurCamera" ("ID", "DeviceID", "CameraID") FROM stdin;
    public          postgres    false    329   _�      �          0    16438    Scene 
   TABLE DATA           }   COPY public."Scene" ("ID", "Nom", "Description", "KeyWord", "Icone", "ElementType", "SceneType", "backgroundID") FROM stdin;
    public          postgres    false    265   ��      �          0    16545    Service 
   TABLE DATA           l   COPY public."Service" ("ID", "Nom", "Description", "KeyWord", "Icone", "Par", "Coef", "Valeur") FROM stdin;
    public          postgres    false    271   ��      �          0    16530    Session 
   TABLE DATA           T   COPY public."Session" ("ID", "StartDate", "EndDate", "Open", "IDTable") FROM stdin;
    public          postgres    false    269   ,�      �          0    16928    SessionDevice 
   TABLE DATA           H   COPY public."SessionDevice" ("ID", "SessionID", "DeviceID") FROM stdin;
    public          postgres    false    309   h�      �          0    16881    SpriteImage 
   TABLE DATA           W   COPY public."SpriteImage" ("ID", "Nom", "Description", "KeyWord", "Icone") FROM stdin;
    public          postgres    false    303   ��      �          0    18103    Table 
   TABLE DATA           k   COPY public."Table" ("ID", "Nom", "Description", "KeyWord", "TableType", "ElementTransformID") FROM stdin;
    public          postgres    false    323   ��      �          0    16912    TransformRecipient 
   TABLE DATA           Y   COPY public."TransformRecipient" ("ID", "RecipientId", "ElementTransformId") FROM stdin;
    public          postgres    false    305   =�      �          0    16828    UnCompatibleClasses 
   TABLE DATA           d   COPY public."UnCompatibleClasses" ("ID", "ClasseAlimentaireID", "UnCompatibleClasseID") FROM stdin;
    public          postgres    false    297   ��      -           0    0    ActionType_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."ActionType_ID_seq"', 1, false);
          public          postgres    false    298            .           0    0    Actionmenu_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Actionmenu_ID_seq"', 32, true);
          public          postgres    false    300            /           0    0    Background_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Background_ID_seq"', 21, true);
          public          postgres    false    262            0           0    0    ClasseAlimentaire_ID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."ClasseAlimentaire_ID_seq"', 1, false);
          public          postgres    false    256            1           0    0    Client_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Client_ID_seq"', 1, false);
          public          postgres    false    260            2           0    0    CommandeExtra_ID_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."CommandeExtra_ID_seq"', 15, true);
          public          postgres    false    310            3           0    0    CommandeType_ID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."CommandeType_ID_seq"', 9, true);
          public          postgres    false    276            4           0    0    Commande_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Commande_ID_seq"', 48, true);
          public          postgres    false    314            5           0    0    CompositionClasse_ID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."CompositionClasse_ID_seq"', 77, true);
          public          postgres    false    294            6           0    0    CompositionClient_ID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."CompositionClient_ID_seq"', 1, false);
          public          postgres    false    278            7           0    0    CompositionDevice_ID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."CompositionDevice_ID_seq"', 8, true);
          public          postgres    false    326            8           0    0    CompositionFamille_ID_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."CompositionFamille_ID_seq"', 137, true);
          public          postgres    false    312            9           0    0    Composition_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Composition_ID_seq"', 3, true);
          public          postgres    false    266            :           0    0    Constante_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Constante_ID_seq"', 1, true);
          public          postgres    false    280            ;           0    0    DeviceTable_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."DeviceTable_ID_seq"', 8, true);
          public          postgres    false    316            <           0    0    Device_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Device_ID_seq"', 12, true);
          public          postgres    false    330            =           0    0    ElementTransform_ID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."ElementTransform_ID_seq"', 74, true);
          public          postgres    false    320            >           0    0    Element_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Element_ID_seq"', 320, true);
          public          postgres    false    318            ?           0    0    Famille_ID_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Famille_ID_seq"', 12, true);
          public          postgres    false    282            @           0    0    FeedBack_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."FeedBack_ID_seq"', 1, false);
          public          postgres    false    284            A           0    0    IPAdresse_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."IPAdresse_ID_seq"', 57, true);
          public          postgres    false    332            B           0    0    IngredientComposition_ID_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."IngredientComposition_ID_seq"', 85, true);
          public          postgres    false    288            C           0    0    IngredientFamille_ID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."IngredientFamille_ID_seq"', 12, true);
          public          postgres    false    290            D           0    0    Ingredient_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Ingredient_ID_seq"', 12, true);
          public          postgres    false    286            E           0    0    Light_ID_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Light_ID_seq"', 36, true);
          public          postgres    false    292            F           0    0    Location_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Location_ID_seq"', 1, false);
          public          postgres    false    324            G           0    0    Menu_ID_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Menu_ID_seq"', 15, true);
          public          postgres    false    274            H           0    0    MoyenPayement_ID_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."MoyenPayement_ID_seq"', 1, false);
          public          postgres    false    272            I           0    0    Parametre_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Parametre_ID_seq"', 1, false);
          public          postgres    false    334            J           0    0    Prefab_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Prefab_ID_seq"', 29, true);
          public          postgres    false    306            K           0    0    Prestation_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Prestation_ID_seq"', 7, true);
          public          postgres    false    258            L           0    0    RepondeurCamera_ID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."RepondeurCamera_ID_seq"', 12, true);
          public          postgres    false    328            M           0    0    Scene_ID_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Scene_ID_seq"', 2, true);
          public          postgres    false    264            N           0    0    Service_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Service_ID_seq"', 1, true);
          public          postgres    false    270            O           0    0    SessionDevice_ID_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."SessionDevice_ID_seq"', 3, true);
          public          postgres    false    308            P           0    0    Session_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Session_ID_seq"', 1, true);
          public          postgres    false    268            Q           0    0    SpriteImage_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."SpriteImage_ID_seq"', 2, true);
          public          postgres    false    302            R           0    0    Table_ID_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Table_ID_seq"', 2, true);
          public          postgres    false    322            S           0    0    TransformRecipient_ID_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."TransformRecipient_ID_seq"', 38, true);
          public          postgres    false    304            T           0    0    UnCompatibleClasses_ID_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."UnCompatibleClasses_ID_seq"', 1, false);
          public          postgres    false    296            �           2606    16856    ActionType ActionType_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."ActionType"
    ADD CONSTRAINT "ActionType_pkey" PRIMARY KEY ("ID");
 H   ALTER TABLE ONLY public."ActionType" DROP CONSTRAINT "ActionType_pkey";
       public            postgres    false    299            �           2606    16868    Actionmenu Actionmenu_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Actionmenu"
    ADD CONSTRAINT "Actionmenu_pkey" PRIMARY KEY ("ID");
 H   ALTER TABLE ONLY public."Actionmenu" DROP CONSTRAINT "Actionmenu_pkey";
       public            postgres    false    301            �           2606    16435    Background Background_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Background"
    ADD CONSTRAINT "Background_pkey" PRIMARY KEY ("ID");
 H   ALTER TABLE ONLY public."Background" DROP CONSTRAINT "Background_pkey";
       public            postgres    false    263            �           2606    16395 (   ClasseAlimentaire ClasseAlimentaire_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."ClasseAlimentaire"
    ADD CONSTRAINT "ClasseAlimentaire_pkey" PRIMARY KEY ("ID");
 V   ALTER TABLE ONLY public."ClasseAlimentaire" DROP CONSTRAINT "ClasseAlimentaire_pkey";
       public            postgres    false    257            �           2606    16418    Client Client_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("ID");
 @   ALTER TABLE ONLY public."Client" DROP CONSTRAINT "Client_pkey";
       public            postgres    false    261            �           2606    16955 7   CommandeExtra CommandeExtra_CommandeID_IngredientID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."CommandeExtra"
    ADD CONSTRAINT "CommandeExtra_CommandeID_IngredientID_key" UNIQUE ("CommandeID", "IngredientID");
 e   ALTER TABLE ONLY public."CommandeExtra" DROP CONSTRAINT "CommandeExtra_CommandeID_IngredientID_key";
       public            postgres    false    311    311            �           2606    16953     CommandeExtra CommandeExtra_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."CommandeExtra"
    ADD CONSTRAINT "CommandeExtra_pkey" PRIMARY KEY ("ID");
 N   ALTER TABLE ONLY public."CommandeExtra" DROP CONSTRAINT "CommandeExtra_pkey";
       public            postgres    false    311            �           2606    16620    CommandeType CommandeType_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."CommandeType"
    ADD CONSTRAINT "CommandeType_pkey" PRIMARY KEY ("ID");
 L   ALTER TABLE ONLY public."CommandeType" DROP CONSTRAINT "CommandeType_pkey";
       public            postgres    false    277            �           2606    17636    Commande Commande_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Commande"
    ADD CONSTRAINT "Commande_pkey" PRIMARY KEY ("ID");
 D   ALTER TABLE ONLY public."Commande" DROP CONSTRAINT "Commande_pkey";
       public            postgres    false    315            �           2606    16815 I   CompositionClasse CompositionClasse_CompositionID_ClasseAlimentaireID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."CompositionClasse"
    ADD CONSTRAINT "CompositionClasse_CompositionID_ClasseAlimentaireID_key" UNIQUE ("CompositionID", "ClasseAlimentaireID");
 w   ALTER TABLE ONLY public."CompositionClasse" DROP CONSTRAINT "CompositionClasse_CompositionID_ClasseAlimentaireID_key";
       public            postgres    false    295    295            �           2606    16813 (   CompositionClasse CompositionClasse_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."CompositionClasse"
    ADD CONSTRAINT "CompositionClasse_pkey" PRIMARY KEY ("ID");
 V   ALTER TABLE ONLY public."CompositionClasse" DROP CONSTRAINT "CompositionClasse_pkey";
       public            postgres    false    295            �           2606    16683 >   CompositionClient CompositionClient_CompositionID_ClientID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."CompositionClient"
    ADD CONSTRAINT "CompositionClient_CompositionID_ClientID_key" UNIQUE ("CompositionID", "ClientID");
 l   ALTER TABLE ONLY public."CompositionClient" DROP CONSTRAINT "CompositionClient_CompositionID_ClientID_key";
       public            postgres    false    279    279            �           2606    16681 (   CompositionClient CompositionClient_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."CompositionClient"
    ADD CONSTRAINT "CompositionClient_pkey" PRIMARY KEY ("ID");
 V   ALTER TABLE ONLY public."CompositionClient" DROP CONSTRAINT "CompositionClient_pkey";
       public            postgres    false    279                       2606    34617 >   CompositionDevice CompositionDevice_CompositionID_DeviceID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."CompositionDevice"
    ADD CONSTRAINT "CompositionDevice_CompositionID_DeviceID_key" UNIQUE ("CompositionID", "DeviceID");
 l   ALTER TABLE ONLY public."CompositionDevice" DROP CONSTRAINT "CompositionDevice_CompositionID_DeviceID_key";
       public            postgres    false    327    327                       2606    34615 (   CompositionDevice CompositionDevice_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."CompositionDevice"
    ADD CONSTRAINT "CompositionDevice_pkey" PRIMARY KEY ("ID");
 V   ALTER TABLE ONLY public."CompositionDevice" DROP CONSTRAINT "CompositionDevice_pkey";
       public            postgres    false    327            �           2606    16975 A   CompositionFamille CompositionFamille_CompositionID_FamilleID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."CompositionFamille"
    ADD CONSTRAINT "CompositionFamille_CompositionID_FamilleID_key" UNIQUE ("CompositionID", "FamilleID");
 o   ALTER TABLE ONLY public."CompositionFamille" DROP CONSTRAINT "CompositionFamille_CompositionID_FamilleID_key";
       public            postgres    false    313    313            �           2606    16973 *   CompositionFamille CompositionFamille_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."CompositionFamille"
    ADD CONSTRAINT "CompositionFamille_pkey" PRIMARY KEY ("ID");
 X   ALTER TABLE ONLY public."CompositionFamille" DROP CONSTRAINT "CompositionFamille_pkey";
       public            postgres    false    313            �           2606    16466    Composition Composition_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Composition"
    ADD CONSTRAINT "Composition_pkey" PRIMARY KEY ("ID");
 J   ALTER TABLE ONLY public."Composition" DROP CONSTRAINT "Composition_pkey";
       public            postgres    false    267            �           2606    16704    Constante Constante_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Constante"
    ADD CONSTRAINT "Constante_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."Constante" DROP CONSTRAINT "Constante_pkey";
       public            postgres    false    281            �           2606    18050 ,   DeviceTable DeviceTable_TableID_DeviceID_key 
   CONSTRAINT     |   ALTER TABLE ONLY public."DeviceTable"
    ADD CONSTRAINT "DeviceTable_TableID_DeviceID_key" UNIQUE ("TableID", "DeviceID");
 Z   ALTER TABLE ONLY public."DeviceTable" DROP CONSTRAINT "DeviceTable_TableID_DeviceID_key";
       public            postgres    false    317    317            �           2606    18048    DeviceTable DeviceTable_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."DeviceTable"
    ADD CONSTRAINT "DeviceTable_pkey" PRIMARY KEY ("ID");
 J   ALTER TABLE ONLY public."DeviceTable" DROP CONSTRAINT "DeviceTable_pkey";
       public            postgres    false    317                       2606    34840    Device Device_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Device"
    ADD CONSTRAINT "Device_pkey" PRIMARY KEY ("ID");
 @   ALTER TABLE ONLY public."Device" DROP CONSTRAINT "Device_pkey";
       public            postgres    false    331            �           2606    18095 &   ElementTransform ElementTransform_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."ElementTransform"
    ADD CONSTRAINT "ElementTransform_pkey" PRIMARY KEY ("ID");
 T   ALTER TABLE ONLY public."ElementTransform" DROP CONSTRAINT "ElementTransform_pkey";
       public            postgres    false    321            �           2606    18071    Element Element_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Element"
    ADD CONSTRAINT "Element_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Element" DROP CONSTRAINT "Element_pkey";
       public            postgres    false    319            �           2606    16715    Famille Famille_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Famille"
    ADD CONSTRAINT "Famille_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Famille" DROP CONSTRAINT "Famille_pkey";
       public            postgres    false    283            �           2606    16725    FeedBack FeedBack_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."FeedBack"
    ADD CONSTRAINT "FeedBack_pkey" PRIMARY KEY ("ID");
 D   ALTER TABLE ONLY public."FeedBack" DROP CONSTRAINT "FeedBack_pkey";
       public            postgres    false    285                       2606    34859    IPAdresse IPAdresse_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."IPAdresse"
    ADD CONSTRAINT "IPAdresse_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."IPAdresse" DROP CONSTRAINT "IPAdresse_pkey";
       public            postgres    false    333            �           2606    16752 J   IngredientComposition IngredientComposition_CompositionID_IngredientID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."IngredientComposition"
    ADD CONSTRAINT "IngredientComposition_CompositionID_IngredientID_key" UNIQUE ("CompositionID", "IngredientID");
 x   ALTER TABLE ONLY public."IngredientComposition" DROP CONSTRAINT "IngredientComposition_CompositionID_IngredientID_key";
       public            postgres    false    289    289            �           2606    16750 0   IngredientComposition IngredientComposition_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."IngredientComposition"
    ADD CONSTRAINT "IngredientComposition_pkey" PRIMARY KEY ("ID");
 ^   ALTER TABLE ONLY public."IngredientComposition" DROP CONSTRAINT "IngredientComposition_pkey";
       public            postgres    false    289            �           2606    16772 >   IngredientFamille IngredientFamille_IngredientID_FamilleID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."IngredientFamille"
    ADD CONSTRAINT "IngredientFamille_IngredientID_FamilleID_key" UNIQUE ("IngredientID", "FamilleID");
 l   ALTER TABLE ONLY public."IngredientFamille" DROP CONSTRAINT "IngredientFamille_IngredientID_FamilleID_key";
       public            postgres    false    291    291            �           2606    16770 (   IngredientFamille IngredientFamille_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."IngredientFamille"
    ADD CONSTRAINT "IngredientFamille_pkey" PRIMARY KEY ("ID");
 V   ALTER TABLE ONLY public."IngredientFamille" DROP CONSTRAINT "IngredientFamille_pkey";
       public            postgres    false    291            �           2606    16741    Ingredient Ingredient_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Ingredient"
    ADD CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("ID");
 H   ALTER TABLE ONLY public."Ingredient" DROP CONSTRAINT "Ingredient_pkey";
       public            postgres    false    287            �           2606    16800    Light Light_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Light"
    ADD CONSTRAINT "Light_pkey" PRIMARY KEY ("ID");
 >   ALTER TABLE ONLY public."Light" DROP CONSTRAINT "Light_pkey";
       public            postgres    false    293                       2606    26210    Location Location_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Location"
    ADD CONSTRAINT "Location_pkey" PRIMARY KEY ("ID");
 D   ALTER TABLE ONLY public."Location" DROP CONSTRAINT "Location_pkey";
       public            postgres    false    325            �           2606    16604    Menu Menu_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Menu"
    ADD CONSTRAINT "Menu_pkey" PRIMARY KEY ("ID");
 <   ALTER TABLE ONLY public."Menu" DROP CONSTRAINT "Menu_pkey";
       public            postgres    false    275            �           2606    16567     MoyenPayement MoyenPayement_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."MoyenPayement"
    ADD CONSTRAINT "MoyenPayement_pkey" PRIMARY KEY ("ID");
 N   ALTER TABLE ONLY public."MoyenPayement" DROP CONSTRAINT "MoyenPayement_pkey";
       public            postgres    false    273                       2606    43226    Parametre Parametre_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Parametre"
    ADD CONSTRAINT "Parametre_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."Parametre" DROP CONSTRAINT "Parametre_pkey";
       public            postgres    false    335            �           2606    16925    Prefab Prefab_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Prefab"
    ADD CONSTRAINT "Prefab_pkey" PRIMARY KEY ("ID");
 @   ALTER TABLE ONLY public."Prefab" DROP CONSTRAINT "Prefab_pkey";
       public            postgres    false    307            �           2606    16406    Prestation Prestation_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Prestation"
    ADD CONSTRAINT "Prestation_pkey" PRIMARY KEY ("ID");
 H   ALTER TABLE ONLY public."Prestation" DROP CONSTRAINT "Prestation_pkey";
       public            postgres    false    259                       2606    34637 5   RepondeurCamera RepondeurCamera_DeviceID_CameraID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."RepondeurCamera"
    ADD CONSTRAINT "RepondeurCamera_DeviceID_CameraID_key" UNIQUE ("DeviceID", "CameraID");
 c   ALTER TABLE ONLY public."RepondeurCamera" DROP CONSTRAINT "RepondeurCamera_DeviceID_CameraID_key";
       public            postgres    false    329    329            	           2606    34635 $   RepondeurCamera RepondeurCamera_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."RepondeurCamera"
    ADD CONSTRAINT "RepondeurCamera_pkey" PRIMARY KEY ("ID");
 R   ALTER TABLE ONLY public."RepondeurCamera" DROP CONSTRAINT "RepondeurCamera_pkey";
       public            postgres    false    329            �           2606    16446    Scene Scene_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Scene"
    ADD CONSTRAINT "Scene_pkey" PRIMARY KEY ("ID");
 >   ALTER TABLE ONLY public."Scene" DROP CONSTRAINT "Scene_pkey";
       public            postgres    false    265            �           2606    16556    Service Service_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Service"
    ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Service" DROP CONSTRAINT "Service_pkey";
       public            postgres    false    271            �           2606    16935 2   SessionDevice SessionDevice_SessionID_DeviceID_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."SessionDevice"
    ADD CONSTRAINT "SessionDevice_SessionID_DeviceID_key" UNIQUE ("SessionID", "DeviceID");
 `   ALTER TABLE ONLY public."SessionDevice" DROP CONSTRAINT "SessionDevice_SessionID_DeviceID_key";
       public            postgres    false    309    309            �           2606    16933     SessionDevice SessionDevice_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SessionDevice"
    ADD CONSTRAINT "SessionDevice_pkey" PRIMARY KEY ("ID");
 N   ALTER TABLE ONLY public."SessionDevice" DROP CONSTRAINT "SessionDevice_pkey";
       public            postgres    false    309            �           2606    16537    Session Session_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Session" DROP CONSTRAINT "Session_pkey";
       public            postgres    false    269            �           2606    16889    SpriteImage SpriteImage_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."SpriteImage"
    ADD CONSTRAINT "SpriteImage_pkey" PRIMARY KEY ("ID");
 J   ALTER TABLE ONLY public."SpriteImage" DROP CONSTRAINT "SpriteImage_pkey";
       public            postgres    false    303            �           2606    18111    Table Table_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Table"
    ADD CONSTRAINT "Table_pkey" PRIMARY KEY ("ID");
 >   ALTER TABLE ONLY public."Table" DROP CONSTRAINT "Table_pkey";
       public            postgres    false    323            �           2606    16917 *   TransformRecipient TransformRecipient_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."TransformRecipient"
    ADD CONSTRAINT "TransformRecipient_pkey" PRIMARY KEY ("ID");
 X   ALTER TABLE ONLY public."TransformRecipient" DROP CONSTRAINT "TransformRecipient_pkey";
       public            postgres    false    305            �           2606    16835 S   UnCompatibleClasses UnCompatibleClasses_ClasseAlimentaireID_UnCompatibleClasseI_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."UnCompatibleClasses"
    ADD CONSTRAINT "UnCompatibleClasses_ClasseAlimentaireID_UnCompatibleClasseI_key" UNIQUE ("ClasseAlimentaireID", "UnCompatibleClasseID");
 �   ALTER TABLE ONLY public."UnCompatibleClasses" DROP CONSTRAINT "UnCompatibleClasses_ClasseAlimentaireID_UnCompatibleClasseI_key";
       public            postgres    false    297    297            �           2606    16833 ,   UnCompatibleClasses UnCompatibleClasses_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."UnCompatibleClasses"
    ADD CONSTRAINT "UnCompatibleClasses_pkey" PRIMARY KEY ("ID");
 Z   ALTER TABLE ONLY public."UnCompatibleClasses" DROP CONSTRAINT "UnCompatibleClasses_pkey";
       public            postgres    false    297                        2606    16869 '   Actionmenu Actionmenu_ActionTypeID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Actionmenu"
    ADD CONSTRAINT "Actionmenu_ActionTypeID_fkey" FOREIGN KEY ("ActionTypeID") REFERENCES public."ActionType"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public."Actionmenu" DROP CONSTRAINT "Actionmenu_ActionTypeID_fkey";
       public          postgres    false    299    301    3295            !           2606    16874 !   Actionmenu Actionmenu_MenuID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Actionmenu"
    ADD CONSTRAINT "Actionmenu_MenuID_fkey" FOREIGN KEY ("MenuID") REFERENCES public."Menu"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public."Actionmenu" DROP CONSTRAINT "Actionmenu_MenuID_fkey";
       public          postgres    false    3261    301    275                       2606    16419    Client Client_ClasseID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_ClasseID_fkey" FOREIGN KEY ("ClasseID") REFERENCES public."ClasseAlimentaire"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public."Client" DROP CONSTRAINT "Client_ClasseID_fkey";
       public          postgres    false    257    261    3243            #           2606    16961 -   CommandeExtra CommandeExtra_IngredientID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CommandeExtra"
    ADD CONSTRAINT "CommandeExtra_IngredientID_fkey" FOREIGN KEY ("IngredientID") REFERENCES public."Ingredient"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."CommandeExtra" DROP CONSTRAINT "CommandeExtra_IngredientID_fkey";
       public          postgres    false    287    3275    311                       2606    16621 %   CommandeType CommandeType_MenuID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CommandeType"
    ADD CONSTRAINT "CommandeType_MenuID_fkey" FOREIGN KEY ("MenuID") REFERENCES public."Menu"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 S   ALTER TABLE ONLY public."CommandeType" DROP CONSTRAINT "CommandeType_MenuID_fkey";
       public          postgres    false    275    277    3261            *           2606    17667 %   Commande Commande_CommandeTypeID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Commande"
    ADD CONSTRAINT "Commande_CommandeTypeID_fkey" FOREIGN KEY ("CommandeTypeID") REFERENCES public."CommandeType"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 S   ALTER TABLE ONLY public."Commande" DROP CONSTRAINT "Commande_CommandeTypeID_fkey";
       public          postgres    false    315    277    3263            &           2606    17637 $   Commande Commande_CompositionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Commande"
    ADD CONSTRAINT "Commande_CompositionID_fkey" FOREIGN KEY ("CompositionID") REFERENCES public."Composition"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 R   ALTER TABLE ONLY public."Commande" DROP CONSTRAINT "Commande_CompositionID_fkey";
       public          postgres    false    315    3253    267            )           2606    17652 &   Commande Commande_MoyenPayementID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Commande"
    ADD CONSTRAINT "Commande_MoyenPayementID_fkey" FOREIGN KEY ("MoyenPayementID") REFERENCES public."MoyenPayement"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 T   ALTER TABLE ONLY public."Commande" DROP CONSTRAINT "Commande_MoyenPayementID_fkey";
       public          postgres    false    273    315    3259            (           2606    17647     Commande Commande_ServiceID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Commande"
    ADD CONSTRAINT "Commande_ServiceID_fkey" FOREIGN KEY ("ServiceID") REFERENCES public."Service"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 N   ALTER TABLE ONLY public."Commande" DROP CONSTRAINT "Commande_ServiceID_fkey";
       public          postgres    false    271    315    3257            '           2606    17642     Commande Commande_SessionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Commande"
    ADD CONSTRAINT "Commande_SessionID_fkey" FOREIGN KEY ("SessionID") REFERENCES public."Session"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 N   ALTER TABLE ONLY public."Commande" DROP CONSTRAINT "Commande_SessionID_fkey";
       public          postgres    false    3255    269    315                       2606    16821 <   CompositionClasse CompositionClasse_ClasseAlimentaireID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CompositionClasse"
    ADD CONSTRAINT "CompositionClasse_ClasseAlimentaireID_fkey" FOREIGN KEY ("ClasseAlimentaireID") REFERENCES public."ClasseAlimentaire"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 j   ALTER TABLE ONLY public."CompositionClasse" DROP CONSTRAINT "CompositionClasse_ClasseAlimentaireID_fkey";
       public          postgres    false    295    257    3243                       2606    16816 6   CompositionClasse CompositionClasse_CompositionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CompositionClasse"
    ADD CONSTRAINT "CompositionClasse_CompositionID_fkey" FOREIGN KEY ("CompositionID") REFERENCES public."Composition"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."CompositionClasse" DROP CONSTRAINT "CompositionClasse_CompositionID_fkey";
       public          postgres    false    267    3253    295                       2606    16689 1   CompositionClient CompositionClient_ClientID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CompositionClient"
    ADD CONSTRAINT "CompositionClient_ClientID_fkey" FOREIGN KEY ("ClientID") REFERENCES public."Client"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public."CompositionClient" DROP CONSTRAINT "CompositionClient_ClientID_fkey";
       public          postgres    false    279    3247    261                       2606    16684 6   CompositionClient CompositionClient_CompositionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CompositionClient"
    ADD CONSTRAINT "CompositionClient_CompositionID_fkey" FOREIGN KEY ("CompositionID") REFERENCES public."Composition"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."CompositionClient" DROP CONSTRAINT "CompositionClient_CompositionID_fkey";
       public          postgres    false    279    267    3253            -           2606    34618 6   CompositionDevice CompositionDevice_CompositionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CompositionDevice"
    ADD CONSTRAINT "CompositionDevice_CompositionID_fkey" FOREIGN KEY ("CompositionID") REFERENCES public."Composition"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."CompositionDevice" DROP CONSTRAINT "CompositionDevice_CompositionID_fkey";
       public          postgres    false    267    327    3253            $           2606    16976 8   CompositionFamille CompositionFamille_CompositionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CompositionFamille"
    ADD CONSTRAINT "CompositionFamille_CompositionID_fkey" FOREIGN KEY ("CompositionID") REFERENCES public."Composition"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."CompositionFamille" DROP CONSTRAINT "CompositionFamille_CompositionID_fkey";
       public          postgres    false    313    267    3253            %           2606    16981 4   CompositionFamille CompositionFamille_FamilleID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CompositionFamille"
    ADD CONSTRAINT "CompositionFamille_FamilleID_fkey" FOREIGN KEY ("FamilleID") REFERENCES public."Famille"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."CompositionFamille" DROP CONSTRAINT "CompositionFamille_FamilleID_fkey";
       public          postgres    false    313    3271    283                       2606    16467 $   Composition Composition_sceneID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Composition"
    ADD CONSTRAINT "Composition_sceneID_fkey" FOREIGN KEY ("sceneID") REFERENCES public."Scene"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 R   ALTER TABLE ONLY public."Composition" DROP CONSTRAINT "Composition_sceneID_fkey";
       public          postgres    false    3251    267    265            .           2606    34841 %   Device Device_ElementTransformID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Device"
    ADD CONSTRAINT "Device_ElementTransformID_fkey" FOREIGN KEY ("ElementTransformID") REFERENCES public."ElementTransform"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public."Device" DROP CONSTRAINT "Device_ElementTransformID_fkey";
       public          postgres    false    321    331    3325            /           2606    34846    Device Device_LocationID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Device"
    ADD CONSTRAINT "Device_LocationID_fkey" FOREIGN KEY ("LocationID") REFERENCES public."Location"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Device" DROP CONSTRAINT "Device_LocationID_fkey";
       public          postgres    false    331    3329    325            +           2606    18096 0   ElementTransform ElementTransform_ElementID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ElementTransform"
    ADD CONSTRAINT "ElementTransform_ElementID_fkey" FOREIGN KEY ("ElementID") REFERENCES public."Element"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 ^   ALTER TABLE ONLY public."ElementTransform" DROP CONSTRAINT "ElementTransform_ElementID_fkey";
       public          postgres    false    3323    321    319            0           2606    34860 !   IPAdresse IPAdresse_DeviceID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IPAdresse"
    ADD CONSTRAINT "IPAdresse_DeviceID_fkey" FOREIGN KEY ("DeviceID") REFERENCES public."Device"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public."IPAdresse" DROP CONSTRAINT "IPAdresse_DeviceID_fkey";
       public          postgres    false    3339    331    333                       2606    16753 >   IngredientComposition IngredientComposition_CompositionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IngredientComposition"
    ADD CONSTRAINT "IngredientComposition_CompositionID_fkey" FOREIGN KEY ("CompositionID") REFERENCES public."Composition"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."IngredientComposition" DROP CONSTRAINT "IngredientComposition_CompositionID_fkey";
       public          postgres    false    3253    267    289                       2606    16758 =   IngredientComposition IngredientComposition_IngredientID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IngredientComposition"
    ADD CONSTRAINT "IngredientComposition_IngredientID_fkey" FOREIGN KEY ("IngredientID") REFERENCES public."Ingredient"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 k   ALTER TABLE ONLY public."IngredientComposition" DROP CONSTRAINT "IngredientComposition_IngredientID_fkey";
       public          postgres    false    289    3275    287                       2606    16778 2   IngredientFamille IngredientFamille_FamilleID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IngredientFamille"
    ADD CONSTRAINT "IngredientFamille_FamilleID_fkey" FOREIGN KEY ("FamilleID") REFERENCES public."Famille"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 `   ALTER TABLE ONLY public."IngredientFamille" DROP CONSTRAINT "IngredientFamille_FamilleID_fkey";
       public          postgres    false    283    291    3271                       2606    16773 5   IngredientFamille IngredientFamille_IngredientID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."IngredientFamille"
    ADD CONSTRAINT "IngredientFamille_IngredientID_fkey" FOREIGN KEY ("IngredientID") REFERENCES public."Ingredient"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 c   ALTER TABLE ONLY public."IngredientFamille" DROP CONSTRAINT "IngredientFamille_IngredientID_fkey";
       public          postgres    false    291    287    3275                       2606    16801    Light Light_CompositionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Light"
    ADD CONSTRAINT "Light_CompositionID_fkey" FOREIGN KEY ("CompositionID") REFERENCES public."Composition"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 L   ALTER TABLE ONLY public."Light" DROP CONSTRAINT "Light_CompositionID_fkey";
       public          postgres    false    3253    267    293                       2606    16605    Menu Menu_MenuParentID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Menu"
    ADD CONSTRAINT "Menu_MenuParentID_fkey" FOREIGN KEY ("MenuParentID") REFERENCES public."Menu"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public."Menu" DROP CONSTRAINT "Menu_MenuParentID_fkey";
       public          postgres    false    275    275    3261                       2606    16447    Scene Scene_backgroundID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Scene"
    ADD CONSTRAINT "Scene_backgroundID_fkey" FOREIGN KEY ("backgroundID") REFERENCES public."Background"("ID") ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Scene" DROP CONSTRAINT "Scene_backgroundID_fkey";
       public          postgres    false    265    3249    263            "           2606    16936 *   SessionDevice SessionDevice_SessionID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."SessionDevice"
    ADD CONSTRAINT "SessionDevice_SessionID_fkey" FOREIGN KEY ("SessionID") REFERENCES public."Session"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."SessionDevice" DROP CONSTRAINT "SessionDevice_SessionID_fkey";
       public          postgres    false    3255    309    269            ,           2606    18112 #   Table Table_ElementTransformID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Table"
    ADD CONSTRAINT "Table_ElementTransformID_fkey" FOREIGN KEY ("ElementTransformID") REFERENCES public."ElementTransform"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public."Table" DROP CONSTRAINT "Table_ElementTransformID_fkey";
       public          postgres    false    323    3325    321                       2606    16836 @   UnCompatibleClasses UnCompatibleClasses_ClasseAlimentaireID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UnCompatibleClasses"
    ADD CONSTRAINT "UnCompatibleClasses_ClasseAlimentaireID_fkey" FOREIGN KEY ("ClasseAlimentaireID") REFERENCES public."ClasseAlimentaire"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 n   ALTER TABLE ONLY public."UnCompatibleClasses" DROP CONSTRAINT "UnCompatibleClasses_ClasseAlimentaireID_fkey";
       public          postgres    false    257    297    3243                       2606    16841 A   UnCompatibleClasses UnCompatibleClasses_UnCompatibleClasseID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UnCompatibleClasses"
    ADD CONSTRAINT "UnCompatibleClasses_UnCompatibleClasseID_fkey" FOREIGN KEY ("UnCompatibleClasseID") REFERENCES public."ClasseAlimentaire"("ID") ON UPDATE CASCADE ON DELETE CASCADE;
 o   ALTER TABLE ONLY public."UnCompatibleClasses" DROP CONSTRAINT "UnCompatibleClasses_UnCompatibleClasseID_fkey";
       public          postgres    false    257    297    3243            �   �   x�U�ͮ�0�uy�ٹ3�w�8h�XcҠ��Du���/�x�$.��|9�c)���H�,5*�Y�Gn�m��g��W3TE�ÛsV�^�U@��ٺ�C�Y��uPd%ٺ��Vrɘ���n6����+S��6`؂�D�<����{�*~��hn����$U\�ȟ�^�Iw/�(���vMq�ND
C�9!�ѫ��z��)�U�      �   �   x�}���0�ϳcض��P����Lx��p�j��&��L7�22����a9˩j¼/04��
�� j+��vm�d��l��G�]��kߎ?T��Ք��d�v�g�Bw�Om=D;���w#FDΐ�l91�>Ql�g�u�բH�
b�D-b�{�T�#e�����_p�L��]�$'��S�y����i���b�n;"����      �   �  x����J�@F������5��U��TQ�+���RԤ����Zdg�o����oNw限,�~�L���4y��w��lw��lO����w7��Ÿ��d�n�w�����L��is���C�w]����6�_���[�m����������	!���D#��%� ��A�I�9�=��F였�08�DX��ٕ�a�c"J!�� �aIkg�k�����9D�;s�����-4�)P�",��DX��ف�aiǔ(a	��R"lh���k;�F	k��v�!7����X�9�XA����"�X�CP<��'�19���ht�Ӡ|�8�64WS�mBT��-��G9�f��E�V�D��؇2�QNM��Q�Cvw�]t;����n�;�u��E�3	PNM��Q�CFw]�9s8+l��Q�C.w�\69���g�y��8jqH���
�Y������9��ݸl��p)|�?� ��T��-Sԥ�J&E���i�'2'      �   �   x�3��/-
)���E�%��y������b����b �+�K�2��HM�)ɨ��(Zarh���`�9�2�AE#HMP���3 ���ʒĢ��<�(���B�j�vxe:H(���b(�*4C�������!��RU8��4F��� >���      �      x������ � �      �   �  x��U;n�P�O�x���-s� �[7�A�Ep���X���Q�DPj������9<O���i|�x���~�Χ�����Iu�Ԥ4s����Zz�Ŋ�Ǡx~����×�4~��r�{	�<�%Đ�=6�6��L��`n�M�J�[�"�R���ﷷi�kc�\S�Q[����x%�b(}�ۮ����n�31T���2$�qi\�2y
����B�H��r���*�\)�K� �tk��ˬl� ���-��m�HS�9��eKs	4-q��qږ�W�)���)�'-�z�X֠�kW�B���!˼�1J5�x�+ĵȚ�e�S��-��lȂRf_��"gH!����wNN	7�����Ll�����Jw��󩙛���α0�&�s��9���Mۏ��M��sg�*�z�2/�P�&	q�GN�ܿ��y�(������-�ؑ���0i���,kOQ�,l����x������}B      �   X   x����0Bk1L��8�wI�	��T����a���D�o���o��K���I&�5Ax,��.�,�VSN�t�t-+������'      �   �   x�}�?�0����S��5�MF�IPD��%h���(~zK2��y���\�� �=��u>-{_iI�2M�Fj���֏0��խ&��B[����Ǫ��	��FY�\�\L��C��EU���b�oU.jX��8V�DF��-�p߯�Z��,󉡁���w�ޫ^��|�6>%?�U�-�e9q�4��դw�      �     x��VK�1\�;E`4��`�`	O��`Ŧcw��=ϟq#���({&ya��E#��]]U.���1�>�(#��H6�)i&%�d�Ob����N�����<�C񆦐�D!I��Љ��D��\�@�b�Ks�4���e�B���8�m�
g��cc���$��m�9�}䄮1sO�Jʁ�}�akVo��#�Ą!����kJ:R�F{RO{���\E��K=�Ǧ���:D>�eJ��}*��T��_��� |$_���J�)1�~�<�9X�\��^�~��6%���8I���x����<b��U�|��>�/��<ag�{���M0h��t'ޢڞ��!�J�V��8X�ՔZ�ukb]6י�b�(�C;�Pad��e�������$=!��\���B��8��6VɅZ�Z؜�_��i��Mׅ�e���GN3.�j~�/ڹ�ھA�2�~�F��]�'(Y�6)�E���ݨ�=~gQ�6[VEd�d^ߥ���z�0$���B�S�M��fx��]���==���R�Vb{J#�͂����#������N���Dp}�0h�ey�����a$A��2���J��gbX"b.~�2k�����p6'��\լ�]�Azj:���E��$��#F�-7�ԝ�|/��Y����뷫�f�^�7�W���ׇn�`s�b�ܭ��nu����'�-o�x�[8�/���~�ټټ��W8��Gvl�N�~�����������-'����G�˷��|����:����L_��      �   %   x�35�4�4�27�4�4�27R@�9�2����� M `      �      x������ � �      �      x�3�4�4� �f\1z\\\ Q#      �   >   x����@B�3.&�ϒ^���� *K�����͍��ݲ^��������D����      �   0   x�3�I��������b�����ļ (�W���i�id����� �=�      �   �   x�����0���_ѹC��?:[ ���N�H�H2E����<���`�o{D y<���zY �/T�V�z��o(ao�F��Q� �~�E*�G�c�]q��<��r��Y��}1t:���j����\gb�4<��-�X��`���B���}T.$�����ĩ4"W��o�����%$WU?����t(a�ny��_>���-!�l�      �      x�3�4A.N# m����� ��      �      x��ݒ�Ƒ��g��0 �w)�&b!�Z��+G(�nj�u����Y��h��/�@�Y'3���{5�pXr�|��!Pf�W�������|>��?uU���\�����w��W��ë���������դ�?����O߼��w��~��H������÷?�P���u�����aR��J^p��9�D�9H���@z�M<�������x���U�]�_��	
q�0�9*�d��oǇ�_w��?~jǶ���'�$<Q�㉡'<�Q�'�|�uz��Qb��k��}�bׄ�:�-��t=��*���/s��;r�2ǭ����x�x��[���$	�8a�	;rT��0}g��(�n̵B�>h�kBI���]tC��F�u@`�R_t@�]2H�@�]��x�c;��N�ļ���{�Aʼ��î�Q�2��ngWy$I���
CO������s�ٻ�*��R�@̅���� ��E�8�&�X23U� I.(ı��~�(0eϛj���)�$LQ�c��'L�Q`J�Uj�U��k���!0��/�Ů,��)Ρڮ��$��S!��i艅3G�)��%�CU����ݥ$��K�8w������Q`ʰ\O�oW��.��\&�ڻH@�\"���Q�ySw�]��$�B+=�G��L*�Htb�m�ʚ�I�)�b�]S��Ή^j[�ʚ�I�)�b�]S��R��_��v|�#)�V$�B�v@)q� ��\
ϋK_�Y$qE�j�b@)q v�9\��u��6@�a��x�R��	�a��Q^>�7�Qz���s��_�,,��e-�z��*�K����\���X r��/k�Žz4J/X S�YA�-�B�,�q�v�v�_%I��
qGCO��9
�ș׋*���6|��%��y^(}�C칐C�{��ҨZq�o�*k�&]/�h��w�S���G��ն�k��\/��h��.dH��3�N�����,�H̳@�Kbς���<����5�Qb=���=�b׃���|)4[�l�fkWI'�3�BJ~�zϒ���|)4"ܬ��]e]Ѥ늁]1��+y
S��n�d���U�M��H�Sﺒ�0؝W�����T��!��.9����� Ɣ�ʱ�/���T��c�{�R_<~-v� �Y��d+���*S%�0H�)�a�=K
�s��&_�w�vk�X?�!�E'�ص!�`.5p'�I���֨�N�g�������%
c�p�"�l�Ѯ��h�u�@���zו<���|��i�MY"���g�җ�0Ğ9��Z�c���<���!�<�!��>q�t�ή�Nh�5�@�~�zג<��iͨ����F��Ca�Z_p�;6d83��K�˧��6J/��#Ř�:@�}�!���Q^��*;��7�t�)�7��Mp��{C��[�~K&�H/��4/U;AJ��  �kcV��]�C<I9�B�(��i^����\��.,F���4�ZR�L��m�)���%�[>�ֻF^�] &�K�^�R&�� �z!�����riT٨F�nTc Ũ�ԻQM��Xo^8����kC���\P]t@J݃7��aO�6S�;I��B�����]��ஏ9���F���$I�x
q�<CO$z9
c�&fx��meW�pO�D��'�3�Dʗ��/�W�̿j��[�t�-)�[��M��}�zڊ�qC����h�u�@���zו<���|Vtbtd7�v��4�\R�L�r�)��B *��o�Ʈ��h�u�@���zו<���|V���^� ����t3@)ƀ��M������!�«C'�,�����K����W��g>3�¡�(�H��@�Kbσ��_l��ϙ*~i�	P�3`艑�AX#����F�_�w�/)&�/��+X���(�]e�Ф녁�0��#y
B�yͬ��{�ή���&���@�釩w#�<]n��K�{�*k�&]S�h��wM�S8�z�����f;��@��.: ���� �b!�I����(�����C�ч��G�l���h��T�0L�D"�'3�D6��0 gƘ�<�T�� �T�R��M #��}����!�%6����H}1��b7�� x�K�N���]e�Фk���0��%y
�m�oY�wlF��v4�F;R�vL���)�波_�a��ʺ�I�)�b�]W�^KW��L��u�$�������n9
��.��(l�$K�s͐��Z�ڐApX1Y�.6��*oiҍ��o�z7��So���F�G�ʆ\�ts.)F]��M��^�z1�F|�[Yb/�����/-v���2̌���Գ����&�Ag�8�Ά�w�Qxuqb?��j�ʦ=�$�9�tzb�3G�f�!K����&J�s����Z캐A��p^<��u�u��>@����x�R��	@�����iJچ~8Yb����C-vc��ޒ߉����$�TO!N�g�T/Ga�:ے��������!0��/:�Ů�!�yb�sgW��O�Dԧ'�3�D���pK��(�Lh�UdTYW4�b EWL��J���/$<�$#kU�M{ r�T3)u��=�B�����(��.0�襾x�Z�:�Apn3d~�	6t����\����dL�B��N��1�%6��aI}1��b7�� �iZh�Jч;kYb3����3-v3���]��7mhm4���t�0���޵$Oar2*��5v�M�4�&WRL�L��\�)L�bz�^��b��Y	�����Vi�Ue�Ҝ׌!�b�c���\����dȩ�H�7I}gW��J�DN�'�2�DN�� ��c"���a����N%��X��6)G �0�;-��6</H�.�A%j/�)�?i ڭ��X�<�T��7Y%�_����*�]U �KC��x=%>t�H\P��-RLd-&�3�O�RI�3J/h�J1��
�^�3�T�AK'	�>l�B{?�  b�0U;��(%� ۧ�e`����
�D��83Gzo�P��YB���7*����4L��2z�iJ���)�e����~�����1�&�*�8MT����Q�J��!�/l]!K�s͐��Z�ڐA0V��L`r�o�e��UF�ޙ�bb4�D�M��QF��Qe��$�&��}[O�I1�u6��6�>������B��%�D_��`S�;�D�P�U�	M�Q
q�=�#��0ljbC�ſ�s
Jl�$0�;
�Nk�}Q&��R۟.��1��%6V��z�J��.(�h)�=�_tƧ����\����d���=Rae��PI`n�$��8I��,)�@���F8���*)I�ȕ�K��H�r�LML�pg����|�$I"uR�=z"�QB�K�t��BB/K/�R���@�QB��Q�T�ઑ-2�]e��$���B�=���H�*�t�!f{��z�k��H�{�&�=Pa���ф�l��� �קjg�z����	`,����g��1���$��W��_��w�ST�LrH2�QX/ "��J��W(u�p�/�P�qlh���ٗ����B��0�e+z1���U�	M�X)����л��)�{
>b�.<Ǩ���&�����Wo��`&Oad\�!}8W�*�&�����]o�]W��x!�L��:�����\3����6d���.�4��T	�h�B��%�D3��`d7��6U�]�d���SR_����2t�ߧ�Cl%���H}�-v=� ��o� �Ԏ�*Qi�M��T�z7��S�u��3�:Se]�$���3���a9
B�ݒ�=���*� ��@L|�����Lt���n�i�ۆf�ĦSs�)�/�RZ�Rb���ϒ�a���1�$��N!NLg艘.G�)�$P�g��)�$��W��_��wM�S0Ǹ�C�bǪ�]e�*M�
qf=1֘� ��e��v�5E��)R4�Ի��)L��e��)�u�� f�1Q{� e�5��^���^�aS��&Y�t�,)fZ����N3��3��Q�k    2��+�t]1��+��u%Oa��.�]����r�\�.f[R��Z&�9�2�(�ڮ�h�kT�3�h�����xC�Í���Ѝ*ߎ'I�#O!NS��'��r�|M����ή�z�$z���z�S/Gaη��%i��6gP��� #z�P�4�I1ѝg"ؚf a���5Jl�'0b�~�;��K���e�:Ck^��(��ؗ�Φ�R�z�Ap;��u':R���Qe�>M����3?S��~y
��9��84�U6�Ҥ�qH1�2�nƕ�p�����~����,�~H�ݯL���i�gC����~8|���><�6W���q:�����w�_}���Y?z�O?�����;�������~x��������?����o>|�����8����5(�)@n���b�#�n�c�-�v�:�&'ú��D��	>�{��	=5 �^8��qmܝM��C���Ȅ�5 �@��̾b:tv��F�$ѐ��'��m�9
���2�ܳV�k@̐l��FdA��j {CZ)�\g���$����1���5$Oa�9,�O�R;�Oe�ͫƌ͂��bft�B0�lb?bڽ5%�?0�9�Ng�m�&��esJ��K�Q��KI�B�����e���2t�u�F�*�Wi�ؚM!��l��ͫ�f�!�le���U�M��H�Sﺒ�0�\RL�Wv��6%Id�
q�MCOd�9
;;C��1E�M�F<���3��M�2&��=1�y���\�X�z �E��� �`�:�3��Ս*��iҍ����z7��S��\I�����Yb��k����b׆��fػNn�l0�l��I7�4�b�i��l3Oag��/�q�àd��g�hfD���(�D��`c������M�X�z �E��� �`�;��6u��vF��@a�Z_��;dHs�%���0aW'YzAt�bLx	z/�b&���0�X���ή�a�$�DS!N�i�l3GA��<W���ʮ�1�$��S!N�i艼3GA�Y�F��p8\=X���y C��� R�K�  �\Z/WR��d�oM��KD�Ӕ(�DG��`�x���hWY'4Il�g/@C�Z��pG���|zMhK3�l��I��
q�`��`+Oa������
ͫ���!0��w� ŮǰC�+�B���U�	M*��;�л��)�<�8��*|P7�l��IbZ[!����'f�sF�a��t��>vx����g���y ��6d��q�4��c	���F�3�-��T��`�W��k��^cWY'4I�d+��6��Hv��p/�艩�!�<mT�0K��s+�<��л�V��p��Iަ����*�I�H��}����r�}]�.��`���0"�C��I1���{at]n���*�&]3�臩w-�Su�w^c��w��J�s��ظ��n�b����՟�?�6����W�W���:M�H��p��p?M/������u��k+�HÇ�J��I�e+��6�Ąv�����q~��Ԭ(�|�'I"�S��z"��Q��`��}H��U�M��H�S� �iW������; �	�jg#A����	`_H��sC�Qe�$���B�-�kH���/$\��n4Jl�!0f�A�{�
�\dl���1ނƧb�*�&��d�8#Ɇ�I�Q��-�Ǘ�V��/��.�T�4���3 L��e���i�md�Mkƌ��>bf��B0����W]�
���<H5Q{�Q)1gl �Rͷ;q�5���U�M�RU��8UC���0�
��rf?>CW��J�nne ���Ի�U����&�Ҋ{�ڮ�	�&�9[�8�������Q�[W��2a�R�X?�!�E'�ص!�`JU���t��Jl6#0b��ΐ��&�)U�;e4J|>N��I�����L[��TU���U�M�n/����L�ۑ��0��];ȳ���	�Mꤾ��i���eL�vɈ��<��_1^�e��	}�𿉻�x��_���5lE�Q��]�=I��B�`���^��`/�饏�l�CyE�M��FWR_̭���2��-(�����b�=|���S��� J�7���|'�r{����I�h�S�ӡg�6��1�6v���L�oٓ$ѵ��q���{9
c�p�ȯ
� �Qe]�$���B���J����1Fxɗ��U�#=��<�N�'�D�g"��Kg�}��.��Q�1mz��k�)Ӣ����8g�|T	��Ć8#�nQ�L�J11nk"��Q��V��/��:�I⁾
q�k�]K����b�Ⱦ��7�I���S�Ӛg�����2X+��ʮ�!�&��[�8s�����Q��b��ߥU�*�&]W�芩w]�Sز7�m���������h�x��B�'�zו<��p�\Qv=��֨��&������ֻIh��04<RD>xbh�*j�x�B���z7�S����B��(�~�5C�Nh�kC�x��Ah���k��F���w"Q)&�P�0t>�4�Br.Kl*07��b��n�A �8�h���U6��$1��gZ���9
R�]���(�hW��O�D��'4�D�������{�e�o����Ňz��O���=�L0�u��Ш�� �;�.f:R��9&��_�wP~3��*�&�����g�]C��[�ة��ا��|�$�.>�8�|�����Q���0/�>mݪ�@�^|��ۉ���� &}O~΅b�!K��y>0�'��@��:v�a>�U��O�D�B�F>CO���(L�� .��z*K�#��C��Ϟ�6d� �%'��m��f�t3)f���,��[K�ſ:�[��7�Ft���i�b���D0ͪcn�1i|����i�$�4K!N�e�4+Ga#_��D����|;�$��>�8M}�����Q�ۄ>�N�G�ʦ7�$������ލq�>Kc�V�Ǩ{�U6�Ѥ�H1�1�n���0ۙ?����N�iH��lG`n�#��lG��l'����H���|>������'�J}&�9���|�K������߿~�X�����|�%I"�R��dz"��Qм�]�Ֆf�8�����] �s-Q{}k e��4 Y�2d���1|��r�ĤT��˨@�$T�|��q�|���t�O�$I�U
q2+COW9
ӫ*�&�e)d��C`��)�qS)&fMM;�v�MD8�]�;�$It�)��P3�D�Z�¬jy��s��q�������%j�3�L_�0��Y�K��F�=v�1#����L��3�̪�؎�;s��*ߧ&I�UM!N���'�r�4��!�Cj��Ш�$��J!Nne��*GawVs�4��[F�V�w+)&�*�1��u$��Su�uB��#�<�л��)L��t����Ѯ�9�&�g#(�y6��ws�<��X�!���-|dTYW4Il��g�4Cﺒ��+e62���*�^i�M���^�z7��S�^��� Z�p�nT��J�nze ���Ի�U���І�n���J�ĦWs�+�/�WZ�W$� �NT�ۇ�c��gx����.~��R�3�	@�Q�2Jӽ6!�{�s^ꋇ�Ůқ.�5bʨ��|�#I"�Q���z"��Q�M~H1�>1��U��&�}��l&f��O�y
��.9bL���|�#I"�Q���z"��QؙO�%]|V�����5I<"T!�SB��q?Oa��yc6�0��+�t]1��+��u%O�^ȂD`���v�uE��V�
q��7��+y
g��8�wٮlT6� ��K�ΜJ�=������Z��U>�$y(�I==|�(����ęhݨ�*�&�94�8sh���C�Q�}41�Hz|��[�ħ��ꝼC����D0�}:r��O��U�	M�fH�S�Z��0��z��0,���fs�/�Z�F{��8P&�U*��:�Ib�L!μ��'F�r�!��j���ʦ=�t�)�=��M{���̮��~C�*Kl�#07��bڣ�nړA �ib�#&/*���>�$��8	��'b�YP���n�*�I����B����r�C��ž
۾���)�$���ّ��5%OA��� �   �%[�{���c��@�M�	13�f!��(�}���Ͱ�>@�$���H��n��®Av�d���$���ّ��5$Oab��h�.<j l���T�<'�nzar��F|�[�3����$��R��	��w�S��S�48uڦ���`�$��4�8�i��L�Qr�f'�d��7��+�$��W�����w]�S���s�a�[7��+�$v�W����w]�S�������D<�ʷ�H�h�Q���c����X��������t�$����t[��?y
��B�>�tk�X?�!�E'�ص!�`�����!|��%6����H}1��b7�� ��b��ֽײ��<s3�/<Z�;��<�9H��\��hG`n�#��hG��h'��~���w���i����o^�����wXOn����?��᫟��t�������a��������9����t��?�o7��7�������~�Û����y~����i��>~:���Uvs�9>��|�xw��t~<����asx�|ޟ������������������as����v*<n?ݟ�n�2�ǟo��7��������I�x:�7�7�_Nӯ=����nޝ��鷞�o6��x~��L�����I�p��:^?�M��v>�7�AL������x>o7������n���t;���_�i�9���/7���u}w��|<�?����t�����q~�7����z/��q:���n�ë��q~9ӫ��<���o�K�?j2g*O��&y��^�?��z<�g�n?N�_���=�xz������ͮ��oP���W�ɾ�K������;�O���D �u?>�]O?���qrhzU���ف�ݟ����z�z�D�m��z���p����*on�_w��ޅ��T=/�7�i�i������������?>�����<�L�������ӯ��$~�'0�n~|�LW�Ux_o�C{�����9������W���ͳ���w���'����~��xu�����:�~�i8O�5���y��~����t�Owfק��N��9���L��O�7��w��tBN�=����ϛ��������~9��	�8���f���x��}��ֶ��7�������_�?O���/����b�tD��U�wi:˿<����z;��j3���/���?���:[r3�3��e���t?]l��������:=�o��b�y��w��ݜ߻�� ������ɭ�i�������i��p]��N?�>��~��������V���������f���w�tEuTӏ�����մ{����ۺ��+躂�+�����nضC]\AQe��������~�.���.���e-�ݸv����%tX?ү�麚��闽��ۮk�n[^MAe���zC�.���.�_�:��������XB�횊�+躂�+����۾�5����*k�֏��j����j����M?�NV�j���մ^?үK躄�K����ö�%4QYKh�ސ��麚��闾�u5�^@����t���
����
�E��m5:����V�u�i]M��t]M���t���vz�@e�����K躄�K����u�vM�|������麚��麚~�i3�U�}c*k5��u	]��u	���]5?��[BS�����麚��麚~�����}��մ^G��t]A���\A���H��
�׷�_��_�Iy      �   �  x��W[jA���KD�ݺK~B `HbCrR�����9�2*�R���c�<�X'qIH��4V>8)�����Ϸ�3h������C��r��T�efR�ӣ�3N���$/������Ñ�/8�T:�-�9�L�{0v�5���g��(��2�֕�X/̮	HP��0=J)ҽ�;畎A6D��Lҙ�O�]�`4�3�N̀x�P*o��A2q/��㏧�_���T�7\cv�뼥��T���_k���>�@�W��d
�i`3�����a�@%*h�'���0o5H
�m��%]r52lM�ȩW��do�/�)�.�6@FU������MxcRE���J�oc�7|�jx.�rd|��}n"���{��l[g����|�"����n�6w쁫57r�\2�ϰ	�M r���1���fN�)������|�NRj���{h�8|_���Y��fTج8��%v���H�%��Y��J��Ӂ�K�X�����~����a)����͆��S����曼���5W)��Fۛ����<�Hq-5ӑ3�qo<�6���#�@��վ�Bީ���B���M����@�{j޲�; 톸�
+�ց]���;t��/zɹJ��׶)�e1#��Z�I{��|K��1�n�6Ц���O��dV�'j��Y$��_�諃�.-7U�
b��������;@2�0^n���&)�NJ�D>��&��o�:]���6��t���{�      �     x�u�;n�0�g�=AZ'}�)��C2uR� `˂*��Ū��i'����A��:!�d�47ߚ�3�N�BqT���5�0�&��5}��7M����Y
���ek"��j���_��)w�Z���{x���X�/���~��Ž�TX:���~��ӱw���3*�|8��T�!���~�.߳�������k��V�������|�t{[g�p:ƻ�\Uo]	+�-�P/ȕ�2��4��%��/C�L���.W����k�4�/��B�      �      x������ � �      �   �   x�mQMO�@=w~7gw�;�Ѥ�`�jb���)4�~*!�M^���x-$;��X8�P��K>�q*c�Dv�%���J6[����[o|!	��U��@3�Z��֬���gכ�9���i���2ֻ�]�é]�~]?��?�=��6�ګ�Dϰ�u
�1[B�~Rwe@����"���O1Z�{`�<�A[�^��u%�y~"����2�I̲Y�ݡ�/� =�F<�qGT9�9���@�	�x�$�O���D�Q|y�      �   �   x�u�K�0D��)8A�~n��aɦ�&x�J���HDJ7����4=L�go��bX<mB��8��`h��Ǖ�%�_�ll���k4������d8ZR�L*�D*�{Tv0=�sO�\���V����.�΂9
a&c"��R�4�n      �   P   x�=��� ��3�D{p��T��
ҿ�@�Ӳ]^��?P$��7*����Yu��6��mqW�yިliֶ��n���_$?q_2      �   !   x�3�4�4�2�4�Ɯ&@҄�H��qqq 5��      �   1   x�3��4�B#=CcN3=c�
LcC.c2�q���͘+F��� ���      �   �   x�u�K�0�ϛ_�{Q��8��EP$��z�u���J���n��z
3�ffg�jkQ*�F�Z��m|�=�u�r��'1��7d�/Ý̒�J����T_���jj,S96v�����od
���쵱���Dw瓜�R;�2xl+�(nMN�#|(ZE�����{��'�
!���(      �   X  x���QO�0��ۧ�ۮ�#F5n�>�Ҍc6������/fbB��{����Z���A>�'P����Ӎ!l-Y�%h��8KHl�5��t�*��5��^�M�kS��T�"�O��<*ҪR�,��읯��a���Z�e�z��55�Ё��+Sa{h�Y"i��(�D�~�a#��it�},��,��>��JNc��1Q���̧�I�GG|�/�3&h�Y3�R�77�]��9��;[��4;�!#&`�P�_t�b6�4	]�]g�r>��g�<s�F��jt�7*cY��Q1
�z�U}��\��1�Lf�˷>*��R�h-��O���$��aE_��      �      x������ � �      �      x������ � �      �   *  x�U��n�0F�퇙H���W"�M����IQ�U�R���_�m�[[���,�S��b�p^祡�6�����Ӱ�C�	z�S�	�)�9�7zh(%T��RwI�����Ɠ�o�j�l\BJ>q�dm���c��Q�F�*et��Bb�\݆�����)���zr8���!,�q� ���N�#�ȱN�	�*ȠCiu��\�Q���q@1��r���]�b
���S�ᰶN�ق�A9�-)^G)9��H��6����tU���(c��4�uw���?��( '�c��ݡ�_{��`t�Ee������Nr|W      �   �   x�m�M�0F��Sp��kC����'d�Pҩ��E�t��k_�-fǇ�*|�\�I�x�l�?�[�bp$H���o�J�ȡ��4�%,R��ߛ�g$��
tx'l���>�H1ӄ%0��b���~ʲG�埄q�Uz���ޓ�K�&��5��S�S�+Ij�JTp͍1nɳ�      �   !   x�34�4�4�24�4��24�"s�=... 3��      �   A   x�3��LI�NN�KU(1c�@��%59�(�$3?�Ӑˈ3 '1�� ���#�=... ��z      �   ;   x�3�N-*�LN��
)�
%�I9p�0'371=�X�"V��,�W���i ��\1z\\\ �)�      �   ,   x�3�4202�50�5�P00�21�2��3�4�)^�i����� I�
�      �      x�3�4�4�2��\�@Ґ+F��� !��      �   ;   x�3�J-�/-B�2s�S����2K�4DT� /�ˈ3$�$1�DS]+����� �*!�      �   N   x�3�IL�IU0��
)���E�%��y�% 1�����k������s�+�!�T5���e������i����� �`!G      �   R   x���1�ja��I���.��H%@p�K��T2w(H��RzQ�_t�[�ww��W�~��|��{�>"��Ue����>����      �      x������ � �     