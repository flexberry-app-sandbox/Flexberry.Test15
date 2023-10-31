package Test15.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test15.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: home
 */
@Entity(name = "IISTest15home")
@Table(schema = "public", name = "City")
public class home {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "КолвоПод")
    private Integer колвопод;

    @Column(name = "Этаж")
    private Integer этаж;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "street")
    @Convert("street")
    @Column(name = "street", length = 16, unique = true, nullable = false)
    private UUID _streetid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "street", insertable = false, updatable = false)
    private street street;


    public home() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Integer getКолвоПод() {
      return колвопод;
    }

    public void setКолвоПод(Integer колвопод) {
      this.колвопод = колвопод;
    }

    public Integer getЭтаж() {
      return этаж;
    }

    public void setЭтаж(Integer этаж) {
      this.этаж = этаж;
    }


}